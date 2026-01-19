from django.apps import AppConfig


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'backend.django_UserAccounts'
    def ready(self):
        import backend.django_UserAccounts.signals