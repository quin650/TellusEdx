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
from .models import UserPassCode
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
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


def verificationEmail(email):
    passCode = random.randint(1000, 9999)
    user = User.objects.get(email=email)
    UserPassCode.objects.create(
        user=user,
        passCode=passCode,
    )

    mail_subject = "Activate your user account."
    message = render_to_string(
        "template_activate_account.html",
        {
            "user": user.username,
            "passCode": passCode,
        },
    )
    email_message = EmailMessage(mail_subject, message, to=[email])
    try:
        sent = email_message.send()
        if sent:
            print("Email sent successfully")
            message = {"success": "Email sent successfully"}
            return Response(message, status=status.HTTP_200_OK)
        else:
            print("Failed to send email")
            message = {"error": "Failed to send email"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(f"Error sending email: {e}")
        message = {"error": "Error sending email"}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


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
                    verificationEmail(email)
                    user = UserSerializerWithToken(user, many=False)
                    print(user.data)
                    return Response({"userData": user.data})
                else:
                    return Response({"error": "Invalid Password"})
        except Exception as e:
            print(f"Error sending email: {e}")
            message = {"error": "Something went wrong when registering account?"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)


class verifyAccountResendPassCodeView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        data = self.request.data
        email = data["email"]
        # Validate email field
        if not email:
            message = {"error": "Email field required"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        passCode = random.randint(1000, 9999)
        user = User.objects.get(email=email)
        user_passCode = UserPassCode.objects.get(user=user)
        if user_passCode is None:
            UserPassCode.objects.create(
                user=user,
                passCode=passCode,
            )
        else:
            user_passCode.passCode = passCode
            user_passCode.save()

        mail_subject = "Activate your user account."
        message = render_to_string(
            "template_activate_account.html",
            {
                "user": user.username,
                "passCode": passCode,
            },
        )
        email_message = EmailMessage(mail_subject, message, to=[email])

        try:
            sent = email_message.send()
            if sent:
                print("Email sent successfully")
                message = {"success": "Code resent √ - Check your email"}
                return Response(message, status=status.HTTP_200_OK)
            else:
                print("Failed to send email")
                message = {"error": "Failed to send email"}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(f"Error sending email: {e}")
            message = {"error": "Error sending email"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)


class VerifyAccountView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        email = data["email"]
        passCode = data["passCode"]
        try:
            if len(passCode) == 0:
                message = {"error": "PassCode Field Required"}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
            elif User.objects.filter(email=email).exists():
                user = User.objects.get(email=email)
                passCode_value = (
                    UserPassCode.objects.filter(user=user)
                    .values_list("passCode", flat=True)
                    .first()
                )
                if int(passCode) == passCode_value:
                    user.is_active = True
                    user.save()
                    message = {"success": "Account activated"}
                    return Response(message, status=status.HTTP_200_OK)
                else:
                    message = {"error": "Invalid PassCode, try again."}
                    return Response(message, status=status.HTTP_400_BAD_REQUEST)
            else:
                message = {"error": "System Error, User not found"}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except:
            message = {"error": "Error! Enter PassCode or resend PassCode email"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordSendPassCodeView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        email = data["email"]
        print("data: ", data)
        # Validate email field
        if not email:
            message = {"error": "Email field required"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        try:
            validate_email(email)
        except ValidationError:
            message = {"error": "Invalid email format"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

        # Check if user exists
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            message = {"error": "Invalid Email. Try again."}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)

        # Generate and update passCode for user
        passCode = random.randint(1000, 9999)
        user_passCode, created = UserPassCode.objects.update_or_create(
            user=user, defaults={"passCode": passCode}
        )
        # user_passCode will be the UserPassCode instance that was either fetched and updated, or newly created.
        # created will be a boolean value: True if a new UserPassCode instance was created, and False if an existing instance was found and updated.

        # Prepare and send email
        mail_subject = "Reset Password Request"
        message = render_to_string(
            "template_reset_password.html",
            {
                "user": user.username,
                "passCode": passCode,
            },
        )
        email_message = EmailMessage(mail_subject, message, to=[email])

        try:
            sent = email_message.send()
        except Exception as e:
            print(f"Error sending email: {e}")
            message = {"error": "Error sending email"}
            return Response(message, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        if sent:
            message = {"success": "Verification Code was sent to your email."}
            return Response(message, status=status.HTTP_200_OK)
        else:
            message = {"error": "Email Failed to send. Confirm Email Address"}
            return Response(message, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ResetPasswordChangeView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        email = data["email"]
        passCode = data["passCode"]
        new_password = data["password"]
        passwordConfirm = data["passwordConfirm"]
        try:
            if User.objects.filter(email=email).exists():
                print("1")
                user = User.objects.get(email=email)
                passCodeValue = (
                    UserPassCode.objects.filter(user=user)
                    .values_list("passCode", flat=True)
                    .first()
                )
                if int(passCode) == passCodeValue:
                    print("2")
                    if new_password == passwordConfirm:
                        print("3")
                        if (
                            len(new_password) > 7
                            and any(char.islower() for char in new_password)
                            and any(char.isupper() for char in new_password)
                            and any(char.isdigit() for char in new_password)
                            and re.search(
                                r"[!@#$%^&*()_+\-=\\[\]{};" ':"\\|,.<>\/?]+',
                                new_password,
                            )
                        ):
                            # Set the new password
                            print("4")
                            user.set_password(new_password)
                            user.save()
                            message = {"success": "Password Changed Successfully"}
                            return Response(message, status=status.HTTP_200_OK)
                        else:
                            print("5")
                            message = {
                                "PasswordError": "Password Strength is not High enough"
                            }
                            return Response(message, status=status.HTTP_400_BAD_REQUEST)
                    else:
                        print("6")
                        message = {"PasswordError": "Passwords Need to Match"}
                        return Response(message, status=status.HTTP_400_BAD_REQUEST)
                else:
                    print("7")
                    message = {"PassCodeError": "Invalid PassCode, try again."}
                    return Response(message, status=status.HTTP_400_BAD_REQUEST)
            else:
                print("8")
                message = {"PasswordError": "Invalid Email Used. System Error"}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print("9")
            print(f"Error: {e}")
            message = {"error": "System Error"}
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


@method_decorator(csrf_protect, name="dispatch")
class CheckAuthenticatedView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        user = self.request.user
        try:
            isAuthenticated = user.is_authenticated
            if isAuthenticated:
                message = {"isAuthenticated": "success"}
                return Response(message, status=status.HTTP_200_OK)
            else:
                message = {"isAuthenticated": "error"}
                return Response(message, status=status.HTTP_401_UNAUTHORIZED)
        except:
            message = {
                "error": "Something went wrong when checking authentication status"
            }
            return Response(message, status=status.HTTP_401_UNAUTHORIZED)
