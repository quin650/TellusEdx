from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.http import HttpResponse
from .views import indexView  

# robots.txt is a public instruction file for search engines that lives at:
# https://yourdomain.com/robots.txt
# Search engines check this file before crawling your site to know:
# What they are allowed to crawl
# What they should avoid
# Where your sitemap is
# It is not for users. It is strictly for bots.

def robots_txt(request):
    content = "\n".join([
        "User-agent: *",
        "Disallow:",
        "Sitemap: https://tellused.com/sitemap.xml",
    ])
    return HttpResponse(content, content_type="text/plain")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', indexView),
    path('accounts/', include('backend.django_UserAccounts.urls')),
    path('profile/', include('backend.user_profile.urls')),
    path("robots.txt", robots_txt),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]