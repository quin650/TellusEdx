from django.contrib.sitemaps import Sitemap

class StaticReactRoutesSitemap(Sitemap):
    priority = 0.8
    changefreq = "weekly"

    def items(self):
        # Add your real, indexable routes here
        return [
            "/",
            "/home",
            "/demos",
            "/demo_dmvClassC",
            "/company",
            "/ourteam",
            "/careers",
            "/merch",
            "/docs",
            "/guides",
            "/apireference",
            "/integrations",
            "/faq",
            "/tutorials",
            "/contactus"
            "/xyz"
            # add course landing pages you want indexed
        ]

    def location(self, item):
        return item
