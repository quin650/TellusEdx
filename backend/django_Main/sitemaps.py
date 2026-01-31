from django.contrib.sitemaps import Sitemap
from datetime import datetime

class StaticReactRoutesSitemap(Sitemap):
    priority = 0.8
    changefreq = "weekly"

    def lastmod(self, obj):
        return datetime.now()
    
    def items(self):
        # Add your real, indexable routes here
        return [
            "/",
            "/demos",
            "/demo_dmvClassC",          # add course landing pages you want indexed
        ]

    def location(self, item):
        return item
