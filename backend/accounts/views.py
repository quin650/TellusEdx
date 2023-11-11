from django.shortcuts import render
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
from rest_framework import serializers


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
        except User.DoesNotExist:
            message = "User with this email does not exist."
            raise serializers.ValidationError({"EmailError": message})

        is_valid_password = check_password(input_password, user.password)
        if not is_valid_password:
            message = "Invalid Password"
            raise serializers.ValidationError({"PasswordError": message})

        if user is not bool and is_valid_password:
            data = super().validate(attrs)
            serializer = UserSerializerWithToken(self.user).data
            for k, v in serializer.items():
                data[k] = v
            return {"userData": data}


# class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
#     def validate(self, attrs):
#         data = super().validate(attrs)
#         serializer = UserSerializerWithToken(self.user).data
#         for k, v in serializer.items():
#             data[k] = v
#         return {"userData": data}


@method_decorator(csrf_protect, name="dispatch")
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


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
                return Response({"error": "Email already exists"})
            else:
                if len(password) < 8:
                    return Response({"error": "Password must be at least 8 characters"})
                else:
                    user = User.objects.create_user(
                        username=username, email=email, password=password
                    )
                    serializer = UserSerializerWithToken(user, many=False)
                    print(serializer.data)
                    return Response(serializer.data)
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
