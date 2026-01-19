from django.contrib import admin
from .models import UserProfile, UserProfileTasks

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name')

# @admin.register(UserProfileTasks)
# class UserProfileTasksAdmin(admin.ModelAdmin):
#     list_display = ('user', 'task_id', 'task_title','task_description','task_tags','task_order','task_priority_level','task_links','task_created_at', 'task_updated_at', 'task_due_date')
#     date_hierarchy = ('task_due_date')

#     list_display = ('xyz')
#     list_filter = ('xyz') # Must be a list or tuple
#     search_fields = ('xyz') # Must be a list or tuple
#     raw_id_fields = ('xyz')
#     date_hierarchy = ('xyz')
#     ordering = ('xyz', 'xyz') # Orders the data by these two fields, one after the other