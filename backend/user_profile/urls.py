from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView, UpdateUserProfileTasks, GetUserProfileTasksView, CreateUserProfileTaskView

urlpatterns = [
    path('user_profile', GetUserProfileView.as_view()),
    path('update_user_profile', UpdateUserProfileView.as_view()),
    path('user_profile_tasks', GetUserProfileTasksView.as_view()),
    path('update_user_profile_tasks', UpdateUserProfileTasks.as_view()),
    path('create_user_profile_tasks', CreateUserProfileTaskView.as_view()),
]