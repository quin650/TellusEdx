from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    phone = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=20, default='')
    
    def __str__(self):
        return self.first_name

class UserNotes(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    note_place_id = models.CharField(max_length=255, default='')
    note_tags = models.CharField(max_length=255, default='')
    note = models.CharField(max_length=2000, default='')
    
    def __str__(self):
        return self.note_place_id