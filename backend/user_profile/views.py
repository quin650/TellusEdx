from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserProfile, UserNotes
from .serializers import UserProfileSerializer, UserNotesSerializer

class GetUserProfileView(APIView):
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

class GetUserNotesView(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            user_notes = UserNotes.objects.get(user=user)
            user_notes = UserNotesSerializer(user_notes)

            return Response({ 'notes': user_notes.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving user notes' })

class UpdateUserProfileNotes(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            data = self.request.data
            note_place_id = data['note_place_id']
            note_tags = data['note_tags']
            note = data['note']

            UserNotes.objects.filter(user=user).update(note_place_id=note_place_id, note_tags=note_tags, note=note)

            user_notes = UserNotes.objects.get(user=user)
            user_notes = UserNotesSerializer(user_notes)

            return Response({ 'notes': user_notes.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when updating user notes' })