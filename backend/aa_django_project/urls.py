from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from .views import indexView  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', indexView),
    path('accounts/', include('backend.accounts.urls')),
    path('profile/', include('backend.user_profile.urls'))
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
