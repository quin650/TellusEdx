# Generated by Django 4.1.4 on 2023-09-09 22:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofiletasks',
            name='status',
            field=models.CharField(choices=[('not-started', 'Not-Started'), ('started', 'Started'), ('pending', 'Pending'), ('complete', 'Complete')], default='not-started', max_length=11),
        ),
    ]