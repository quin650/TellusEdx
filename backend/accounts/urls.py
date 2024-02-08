from django.urls import path
from . import views

urlpatterns = [
    path("register", views.RegisterView.as_view()),
    path("csrf_cookie", views.GetCSRFToken.as_view()),
    path("login/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("", views.getUsers.as_view(), name="users"),
    path("profile", views.getUserProfile.as_view(), name="users-profile"),
    path("activate/<uidb64>/<token>", views.activate, name="activate"),
]
