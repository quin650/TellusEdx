from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView, UpdateUserProfileTasks, GetUserProfileTasksView

urlpatterns = [
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),
    path('userProfileTasks', GetUserProfileTasksView.as_view()),
    path('updateUserProfileTasks', UpdateUserProfileTasks.as_view()),
]