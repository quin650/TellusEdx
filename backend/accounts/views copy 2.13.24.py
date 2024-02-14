from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User
from accounts.serializers import UserSerializerWithToken, UserSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework import permissions
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from rest_framework.views import APIView
from django.contrib.auth.hashers import check_password
from django.contrib import messages
from rest_framework import serializers
from .models import UserPin
import random

from django.template.loader import render_to_string
from django.core.mail import EmailMessage


import re


@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        self.request.META.get("CSRF_COOKIE")
        return Response({"success": "CSRF cookie set"})


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        input_password = attrs.get("password")
        input_email = attrs.get("username")

        try:
            user = User.objects.get(email=input_email)
            print("user: ", user)
        except User.DoesNotExist:
            message = "Access Denied"
            print("message: ", message)
            raise serializers.ValidationError({"Error": message})

        is_valid_password = check_password(input_password, user.password)
        if not is_valid_password:
            message = "Access Denied"
            print("message: ", message)
            raise serializers.ValidationError({"Error": message})

        if user is not bool and is_valid_password:
            data = super().validate(attrs)
            serializer = UserSerializerWithToken(self.user).data
            for k, v in serializer.items():
                data[k] = v
            return {"userData": data}


@method_decorator(csrf_protect, name="dispatch")
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


def activate(user, pin):

    print("activate action")
    # get user, get pin
    # if pin matches, change is_active to true --> return Response('success' ...)
    # if pin does not match, --> return Response('fail' ...)


def verificationEmail(request, user, to_email):
    pin = random.randint(1000, 9999)
    UserPin.objects.create(
        user=user,
        pin=pin,
    )
    pin_value = UserPin.objects.filter(user=user).values_list("pin", flat=True).first()

    mail_subject = "Activate your user account."
    message = render_to_string(
        "template_activate_account.html",
        {
            "user": user.username,
            "pin": pin_value,
        },
    )
    email = EmailMessage(mail_subject, message, to=[to_email])
    try:
        sent = email.send()
        if sent:
            print("Email sent successfully")
            msg = {"success": "Check your inbox at {}".format(to_email)}
        else:
            print("Failed to send email")
            msg = {"error": "Failed to send email to {}".format(to_email)}
    except Exception as e:
        print(f"Error sending email: {e}")
        msg = {"error": f"Error sending email: {e}"}


def verificationPin(user):
    pin = random.randint(1000, 9999)
    UserPin.objects.create(
        user=user,
        pin=pin,
    )
    pin_value = UserPin.objects.filter(user=user).values_list("pin", flat=True).first()
    return pin_value


def verificationCodeEmail(request, user, to_email, pin):
    mail_subject = "Activate your user account."
    message = render_to_string(
        "template_activate_account.html",
        {
            "user": user.username,
            "pin": pin,
        },
    )
    email = EmailMessage(mail_subject, message, to=[to_email])
    try:
        sent = email.send()
        if sent:
            print("Email sent successfully")
            msg = {"success": "Check your inbox at {}".format(to_email)}
        else:
            print("Failed to send email")
            msg = {"error": "Failed to send email to {}".format(to_email)}
    except Exception as e:
        print(f"Error sending email: {e}")
        msg = {"error": f"Error sending email: {e}"}


@method_decorator(csrf_protect, name="dispatch")
class RegisterView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        username = data["username"]
        email = data["username"]
        password = data["password"]
        try:
            if User.objects.filter(email=email).exists():
                message = ({"error": "Email already exists. Sign In Instead"},)
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
            else:
                if (
                    len(password) > 7
                    and any(char.islower() for char in password)
                    and any(char.isupper() for char in password)
                    and any(char.isdigit() for char in password)
                    and re.search(
                        r"[!@#$%^&*()_+\-=\\[\]{};" ':"\\|,.<>\/?]+', password
                    )
                ):
                    user = User.objects.create_user(
                        username=username,
                        email=email,
                        password=password,
                        is_active=False,
                    )
                    pin = verificationPin(user)
                    verificationCodeEmail(request, user, email, pin)

                    # serializer = UserSerializerWithToken(user, many=False)
                    # print(serializer.data)
                    # return Response(serializer.data)
                    message = {"success": "xyzxyzxyz"}
                    return Response(message, status=status.HTTP_200_OK)
                else:
                    return Response({"error": "Invalid Password"})
        except:
            message = {"error": "Something went wrong when registering account?"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)


class getUsers(APIView):
    permission_classes = (permissions.IsAdminUser,)

    def get(self, request, format=None):
        users = User.objects.all()
        users = UserSerializer(users, many=True)
        return Response(users.data)


class getUserProfile(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        user = request.user
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
