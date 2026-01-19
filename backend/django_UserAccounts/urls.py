from django.urls import path
from . import views

urlpatterns = [
    path("", views.getUsers.as_view(), name="users"),
    path("csrf_cookie", views.GetCSRFToken.as_view()),
    path("register/", views.RegisterView.as_view()),
    path("verifyAccountView/", views.VerifyAccountView.as_view()),
    path(
        "verifyAccountResendPassCodeView/",
        views.verifyAccountResendPassCodeView.as_view(),
    ),
    path("resetPasswordSendPassCode/", views.ResetPasswordSendPassCodeView.as_view()),
    path("resetPasswordChange/", views.ResetPasswordChangeView.as_view()),
    path("login/", views.MyTokenObtainPairView.as_view()),
    path("authenticated/", views.CheckAuthenticatedView.as_view()),
    path("profile/", views.getUserProfile.as_view()),
]
