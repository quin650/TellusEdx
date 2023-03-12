from django.urls import path
from .views import RegisterView, GetCSRFToken, LoginView, LogoutView, CheckAuthenticatedView, DeleteAccountView

urlpatterns = [
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('logout', LogoutView.as_view()),
    path('delete', DeleteAccountView.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
] 