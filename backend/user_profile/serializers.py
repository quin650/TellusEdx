from rest_framework import serializers
from .models import UserProfile, UserProfileTasks

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class UserTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfileTasks
        fields = '__all__'