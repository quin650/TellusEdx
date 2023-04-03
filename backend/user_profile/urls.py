from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView, UpdateUserProfileTasks, GetUserProfileTasksView, CreateUserProfileTaskView, DeleteUserProfileTask

urlpatterns = [
    path('user_profile', GetUserProfileView.as_view()),
    path('update_user_profile', UpdateUserProfileView.as_view()),
    path('load_user_profile_tasks', GetUserProfileTasksView.as_view()),
    path('update_user_profile_tasks', UpdateUserProfileTasks.as_view()),
    path('create_user_profile_tasks', CreateUserProfileTaskView.as_view()),
    path('delete_user_profile_task', DeleteUserProfileTask.as_view()),
]