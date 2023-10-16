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
from django.contrib.auth.models import User
@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set' })
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v
        return data
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
@method_decorator(csrf_protect, name='dispatch')
class RegisterView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data = self.request.data
        username=data['email']
        email=data['email']
        password = data['password']
        try:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'})
            else:
                if len(password) < 8:
                    return Response({'error': 'Password must be at least 8 characters'})
                else: 
                    user = User.objects.create_user(username=username,email=email,password=password)
                    serializer = UserSerializerWithToken(user, many=False)
                    print(serializer.data)
                    return Response(serializer.data)
        except:
                message = {'error': 'Something went wrong when registering account?'}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
class getUsers(APIView):
    permission_classes = (permissions.IsAdminUser, )
    def get(self, request, format=None):
        users = User.objects.all()
        users = UserSerializer(users, many=True)
        return Response(users.data)
class getUserProfile(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    def get(self, request, format=None):
        user = request.user
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

# from django.contrib.auth.models import User
# from rest_framework.views import APIView
# from rest_framework import permissions
# from django.contrib import auth
# from rest_framework.response import Response
# # from user_profile.models import UserProfile, UserProfileTasks
# from .serializers import UserSerializer
# from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
# from django.utils.decorators import method_decorator

# class CheckAuthenticatedView(APIView):
#     def get(self, request, format=None):
#         user = self.request.user

#         try:
#             isAuthenticated = user.is_authenticated

#             if isAuthenticated:
#                 return Response({ 'isAuthenticated': 'success' })
#             else:
#                 return Response({ 'isAuthenticated': 'error' })
#         except:
#             return Response({ 'error': 'Something went wrong when checking authentication status' })

# @method_decorator(csrf_protect, name='dispatch')
# class LoginView(APIView):
#     permission_classes = (permissions.AllowAny, )

#     def post(self, request, format=None):
#         data = self.request.data

#         username = data['username']
#         password = data['password']
#         try:
#             user = auth.authenticate(username=username, password=password)

#             if user is not None:
#                 auth.login(request, user)
#                 return Response({ 'success': 'User authenticated'})
#             else:
#                 return Response({ 'error': 'Error Authenticating ' })
#         except:
#             return Response({ 'error': 'Something wen wrong when logging in'})
# class LogoutView(APIView):
#     def post(self, request, format=None):
#         try:
#             auth.logout(request)
#             return Response({ 'success': 'Logout Out'})
#         except:
#             return Response({ 'error': 'Something went wrong when logging out' })

# class DeleteAccountView(APIView):
#     def delete(self, request, format=None):
#         user = self.request.user

#         try:
#             User.objects.filter(id = user.id).delete()
#             return Response({ 'success': 'User delete successfully'})
#         except:
#             return Response({ 'error': 'Something went wrong when trying to delete user'})