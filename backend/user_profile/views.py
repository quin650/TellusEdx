from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from .models import UserProfile, UserProfileTasks
from .serializers import UserProfileSerializer, UserProfileSerializerWithToken, UserTasksSerializer
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
@method_decorator(csrf_protect, name='dispatch')
class CreateUserProfileView(APIView):
    permission_classes = (permissions.IsAuthenticated, )
    def post(self, request, format=None):
        user = self.request.user
        username = user.username
        data = self.request.data
        first_name = data['first_name']
        last_name = data['last_name']
        phone = data['phone']
        city = data['city']
        try:
            if len(first_name) != 0:
                if UserProfile.objects.filter(user=user).exists():
                    return Response({'error': 'User already has profile'})
                else:
                    print("1")
                    UserProfile.objects.create(user=user, first_name=first_name, last_name=last_name, phone=phone, city=city)
                    print("2")
                    user_profile = UserProfile.objects.get(user=user)
                    print("3")
                    user_profile = UserProfileSerializerWithToken(user_profile)
                    print('user_profile data2', user_profile.data)
                    return Response({ 'profile': user_profile.data, 'username': str(username) })
            else:
                return Response({'error': "first name can't be blank"})
        except:
                return Response({'error': 'Something went wrong when creating the user profile'})
class LoadUserProfileView(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username = user.username
            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)
            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving profile' })
class UpdateUserProfileView(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user
            username = user.username
            data = self.request.data
            first_name = data['first_name']
            last_name = data['last_name']
            phone = data['phone']
            city = data['city']
            UserProfile.objects.filter(user=user).update(first_name=first_name, last_name=last_name, phone=phone, city=city)
            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)
            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when updating profile' })
@method_decorator(csrf_protect, name='dispatch')
class CreateUserProfileTaskView(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        user = self.request.user
        username = user.username
        data = self.request.data
        task_title = data['task_title']
        task_description = data['task_description']
        task_tags = data['task_tags']
        task_order = data['task_order']
        task_priority_level = data['task_priority_level']
        task_links = data['task_links']
        task_due_date = data['task_due_date']
        try:
            user_profile_tasks = UserProfileTasks.objects.create(user=user, task_title=task_title,task_description=task_description,task_tags=task_tags, task_order=task_order, task_priority_level=task_priority_level, task_links=task_links, task_due_date=task_due_date)
            user_profile_tasks = UserTasksSerializer(user_profile_tasks)
            # print('user_profile_tasks.data: ', user_profile_tasks.data)
            return Response({ 'tasks': user_profile_tasks.data, 'username': str(username) })
        except:
                return Response({'error': 'Something went wrong when creating task'})
class LoadUserProfileTasksView(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username = user.username
            user_profile_tasks = UserProfileTasks.objects.filter(user=user)
            user_profile_tasks = UserTasksSerializer(user_profile_tasks, many=True)
            return Response({ 'tasks': user_profile_tasks.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving user tasks' })
class UpdateUserProfileTasks(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user
            username = user.username
            data = self.request.data
            task_title = data['task_title']
            task_description = data['task_description']
            task_tags = data['task_tags']
            task_order = data['task_order']
            task_priority_level = data['task_priority_level']
            task_links = data['task_links']
            task_due_date = data['task_due_date']
            task_id = data['task_id']

            UserProfileTasks.objects.filter(task_id = task_id).update(task_title=task_title, task_description=task_description, task_tags=task_tags, task_order=task_order, task_priority_level=task_priority_level, task_links=task_links, task_due_date=task_due_date)
            user_profile_tasks_by_task_id = UserProfileTasks.objects.filter(user=user, task_id=task_id)
            user_profile_tasks_by_task_id = UserTasksSerializer(user_profile_tasks_by_task_id, many=True)
            # print('user_profile_tasks_by_task_id.data: ', user_profile_tasks_by_task_id.data)
            return Response({ 'tasks': user_profile_tasks_by_task_id.data})
        except:
            return Response({ 'error': 'Something went wrong when updating user tasks' })
class DeleteUserProfileTask(APIView):
    def delete(self, request, format=None): 
        data = self.request.data
        task_id = data['task_id']
        try:
            UserProfileTasks.objects.filter(task_id = task_id).delete()
            return Response({ 'success': 'The delete request went through'})
        except:
            return Response({ 'error': 'Something went wrong when trying to delete user'})