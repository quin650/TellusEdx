from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView, UpdateUserProfileNotes

urlpatterns = [
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),
    path('userNote', GetUserProfileView.as_view()),
    path('updateUserNote', UpdateUserProfileNotes.as_view()),
]