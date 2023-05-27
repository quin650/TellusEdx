from django.db import models
from django.contrib.auth.models import User
from .utils import custom_id

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    phone = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=20, default='')
    def __str__(self):
        return self.first_name
class UserProfileTasks(models.Model):
    STATUS_CHOICES = (
        ('not-started', 'Not-Started'),
        ('started', 'Started'),
        ('pending', 'Pending'),
        ('complete', 'Complete')
    )
    user = models.ForeignKey(User,  blank=True, null=True, on_delete=models.SET_NULL)
    task_id = models.CharField(primary_key=True, max_length=11, unique=True, default=custom_id)
    task_title = models.CharField(max_length=255, default='')
    task_description = models.CharField(max_length=255, default='')
    task_tags = models.CharField(max_length=255, default='')
    task_order = models.IntegerField(default=0)
    task_priority_level = models.CharField(max_length=255, default='')
    task_links = models.CharField(max_length=255, default='')
    task_created_at = models.DateTimeField(auto_now_add=True, auto_now=False, blank=True)
    task_updated_at = models.DateTimeField(auto_now_add=False, auto_now=True, blank=True)
    task_due_date = models.DateField(auto_now_add=False, auto_now=False, blank=True, null=True)
    task_completed_at = models.DateTimeField(auto_now_add=False, auto_now=False, blank=True, null=True)
    status = models.CharField(max_length=11, choices=STATUS_CHOICES, default='not-started')

    class Meta:
        ordering = ('task_due_date', 'user')

    def __str__(self):
        return self.task_title