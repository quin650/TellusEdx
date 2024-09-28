from django.db import models
from django.contrib.auth.models import User


class UserPassCode(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    passCode = models.IntegerField(default=0)

    def __str__(self):
        return str(self.passCode)
