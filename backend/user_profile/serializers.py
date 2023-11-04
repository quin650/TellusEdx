from rest_framework import serializers
from .models import UserProfile, UserProfileTasks
from rest_framework_simplejwt.tokens import RefreshToken


class UserProfileSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = UserProfile
        fields = "__all__"

    def get__id(self, obj):
        return obj.id


# class UserProfileSerializerWithToken(UserProfileSerializer):
#     token = serializers.SerializerMethodField(read_only=True)
#     class Meta:
#         model = UserProfile
#         fields = '__all__'
#     def get_token(self, obj):
#         token = RefreshToken.for_user(obj)
#         return str(token.access_token)


class UserTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfileTasks
        fields = "__all__"
