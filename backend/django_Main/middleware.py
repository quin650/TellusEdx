from django.http import HttpResponsePermanentRedirect

class WwwRedirectMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # 1) Never redirect ACME HTTP-01 validation requests
        if request.path.startswith("/.well-known/acme-challenge/"):
            return self.get_response(request)

        host = request.get_host().split(":")[0]  # strips port if present

        # 2) Canonical domain: telluslearn.com (apex)
        # Redirect EVERYTHING else to https://telluslearn.com
        if host in {"tellused.com", "www.tellused.com", "www.telluslearn.com"}:
            return HttpResponsePermanentRedirect(
                "https://telluslearn.com" + request.get_full_path()
            )

        return self.get_response(request)
