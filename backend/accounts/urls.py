from django.urls import path
from . import views

urlpatterns = [
    path("", views.getUsers.as_view(), name="users"),
    path("csrf_cookie", views.GetCSRFToken.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("activate/", views.ActivateView.as_view()),
    path("resendPin/", views.ResendPinView.as_view()),
    path("passwordResetPin/", views.PasswordResetSendPinView.as_view()),
    path("passwordResetResendPin/", views.PasswordResetReSendPinView.as_view()),
    path("login/", views.MyTokenObtainPairView.as_view()),
    path("authenticated/", views.CheckAuthenticatedView.as_view()),
    path("profile/", views.getUserProfile.as_view()),
]
