from django.apps import AppConfig


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'django_UserAccounts'
    def ready(self):
        import django_UserAccounts.signals