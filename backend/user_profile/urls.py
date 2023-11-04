from django.urls import path
from .views import (
    CreateUserProfileView,
    LoadUserProfileView,
    UpdateUserProfileView,
    DeleteUserProfileView,
    UpdateUserProfileTasks,
    LoadUserProfileTasksView,
    CreateUserProfileTaskView,
    DeleteUserProfileTask,
)

urlpatterns = [
    path("create_user_profile/", CreateUserProfileView.as_view()),
    path("load_user_profile/", LoadUserProfileView.as_view()),
    path("update_user_profile/", UpdateUserProfileView.as_view()),
    path("delete_user_profile/", DeleteUserProfileView.as_view()),
    path("load_user_profile_tasks/", LoadUserProfileTasksView.as_view()),
    path("update_user_profile_tasks/", UpdateUserProfileTasks.as_view()),
    path("create_user_profile_tasks/", CreateUserProfileTaskView.as_view()),
    path("delete_user_profile_task/", DeleteUserProfileTask.as_view()),
]
