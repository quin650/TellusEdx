# Generated by Django 4.1.7 on 2023-10-27 21:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import user_profile.utils


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfileTasks',
            fields=[
                ('task_id', models.CharField(default=user_profile.utils.custom_id, max_length=11, primary_key=True, serialize=False, unique=True)),
                ('task_title', models.CharField(default='', max_length=255)),
                ('task_description', models.CharField(default='', max_length=255)),
                ('task_tags', models.CharField(default='', max_length=255)),
                ('task_order', models.IntegerField(default=0)),
                ('task_priority_level', models.CharField(default='', max_length=255)),
                ('task_links', models.CharField(default='', max_length=255)),
                ('task_created_at', models.DateTimeField(auto_now_add=True)),
                ('task_updated_at', models.DateTimeField(auto_now=True)),
                ('task_due_date', models.DateField(blank=True, null=True)),
                ('task_completed_at', models.DateTimeField(blank=True, null=True)),
                ('status', models.CharField(choices=[('not-started', 'Not-Started'), ('started', 'Started'), ('pending', 'Pending'), ('complete', 'Complete')], default='not-started', max_length=11)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('task_due_date', 'user'),
            },
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(default='', max_length=255)),
                ('last_name', models.CharField(default='', max_length=255)),
                ('phone', models.CharField(default='', max_length=20)),
                ('city', models.CharField(default='', max_length=20)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]