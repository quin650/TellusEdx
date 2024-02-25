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
    pin = random.randint(1000, 9999)
    user = User.objects.get(email=email)
    UserPin.objects.create(
        user=user,
        pin=pin,
    )

    mail_subject = "Activate your user account."
    message = render_to_string(
        "template_activate_account.html",
        {
            "user": user.username,
            "pin": pin,
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
        except:
            message = {"error": "Something went wrong when registering account?"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)


class VerifyYourAccountResendPinView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        data = self.request.data
        email = data["email"]
        # Validate email field
        if not email:
            message = {"error": "Email field required"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        pin = random.randint(1000, 9999)
        user = User.objects.get(email=email)
        user_pin = UserPin.objects.get(user=user)
        if user_pin is None:
            UserPin.objects.create(
                user=user,
                pin=pin,
            )
        else:
            user_pin.pin = pin
            user_pin.save()

        mail_subject = "Activate your user account."
        message = render_to_string(
            "template_activate_account.html",
            {
                "user": user.username,
                "pin": pin,
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


class VerifyYourAccountView(APIView):
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
                    UserPin.objects.filter(user=user)
                    .values_list("pin", flat=True)
                    .first()
                )
                if int(passCode) == passCode_value:
                    print("test5")
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


class ResetPasswordSendPinView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        data = self.request.data
        email = data["email"]
        # Validate email field
        if not email:
            message = {"error": "Email field required"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        pin = random.randint(1000, 9999)
        user = User.objects.get(email=email)
        user_pin = UserPin.objects.get(user=user)
        if user_pin is None:
            UserPin.objects.create(
                user=user,
                pin=pin,
            )
        else:
            user_pin.pin = pin
            user_pin.save()

        mail_subject = "Reset Password Request"
        message = render_to_string(
            "template_reset_password.html",
            {
                "user": user.username,
                "pin": pin,
            },
        )
        email_message = EmailMessage(mail_subject, message, to=[email])

        try:
            sent = email_message.send()
            if sent:
                print("Email sent successfully")
                message = {"success": "Verification Code sent to your email."}
                return Response(message, status=status.HTTP_200_OK)
            else:
                print("Failed to send email")
                message = {"error": "Email Failed to send. Confirm Email"}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(f"Error sending email: {e}")
            message = {"error": "Error sending email"}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)


class ResetYourPasswordView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        email = data["email"]
        passCode = data["passCode"]
        new_password = data["password"]
        passwordConfirm = data["passwordConfirm"]
        try:
            if User.objects.filter(email=email).exists():
                user = User.objects.get(email=email)
                pin_value = (
                    UserPin.objects.filter(user=user)
                    .values_list("pin", flat=True)
                    .first()
                )
                if int(passCode) == pin_value:
                    if new_password == passwordConfirm:
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
                            user.set_password(new_password)
                            user.save()
                            message = {"success": "Password Changed Successfully"}
                            return Response(message, status=status.HTTP_200_OK)
                        else:
                            message = {
                                "PasswordError": "Password Strength is not High enough"
                            }
                            return Response(message, status=status.HTTP_400_BAD_REQUEST)
                    else:
                        message = {"PasswordError": "Passwords Need to Match"}
                        return Response(message, status=status.HTTP_400_BAD_REQUEST)
                else:
                    message = {"PinError": "Invalid Pin, try again."}
                    return Response(message, status=status.HTTP_400_BAD_REQUEST)
            else:
                message = {"PasswordError": "Invalid Email Used. System Error"}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except:
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


# class ResetPasswordSendPinView(APIView):
#     permission_classes = (permissions.AllowAny,)

#     def post(self, request, format=None):
#         data = self.request.data
#         email = data["email"]
#         print("data: ", data)
#         # Validate email field
#         if not email:
#             message = {"error": "Email field required"}
#             return Response(message, status=status.HTTP_400_BAD_REQUEST)
#         try:
#             validate_email(email)
#         except ValidationError:
#             message = {"error": "Invalid email format"}
#             return Response(message, status=status.HTTP_400_BAD_REQUEST)

#         # Check if user exists
#         try:
#             user = User.objects.get(email=email)
#         except User.DoesNotExist:
#             message = {"error": "User does not exist"}
#             return Response(message, status=status.HTTP_400_BAD_REQUEST)

#         # Generate and update PIN for user
#         pin = random.randint(1000, 9999)
#         user_pin, created = UserPin.objects.update_or_create(
#             user=user, defaults={"pin": pin}
#         )
#         # user_pin will be the UserPin instance that was either fetched and updated, or newly created.
#         # created will be a boolean value: True if a new UserPin instance was created, and False if an existing instance was found and updated.

#         # Prepare and send email
#         mail_subject = "Reset Password Request"
#         message = render_to_string(
#             "template_reset_password.html",
#             {
#                 "user": user.username,
#                 "pin": pin,
#             },
#         )
#         email_message = EmailMessage(mail_subject, message, to=[email])

#         try:
#             sent = email_message.send()
#         except Exception as e:
#             message = {"error": "Error sending email"}
#             return Response(message, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#         if sent:
#             message = {"success": "Verification Code sent to your email."}
#             return Response(message, status=status.HTTP_200_OK)
#         else:
#             message = {"error": "Email Failed to send. Confirm Email Address"}
#             return Response(message, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
