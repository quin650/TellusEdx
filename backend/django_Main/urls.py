from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.http import HttpResponse
from .views import indexView

# ✅ add these imports
from django.contrib.sitemaps.views import sitemap
from .sitemaps import StaticReactRoutesSitemap

def robots_txt(request):
    content = "\n".join([
        "User-agent: *",
        "Disallow:",
        "Sitemap: https://telluslearn.com/sitemap.xml",
    ])
    return HttpResponse(content, content_type="text/plain")

def acme_challenge(request, token):
    return HttpResponse("", status=404, content_type="text/plain")

# ✅ add this dict
sitemaps = {
    "static": StaticReactRoutesSitemap,
}

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", indexView),
    path("accounts/", include("django_UserAccounts.urls")),
    path("profile/", include("user_profile.urls")),
    path(".well-known/acme-challenge/<str:token>", acme_challenge),
    path("robots.txt", robots_txt),

    # ✅ add this line BEFORE the catch-all
    path("sitemap.xml", sitemap, {"sitemaps": sitemaps}, name="sitemap"),
]

# ✅ keep this LAST
urlpatterns += [
    re_path(r"^.*", TemplateView.as_view(template_name="index.html")),
]
