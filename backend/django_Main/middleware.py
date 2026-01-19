from django.http import HttpResponsePermanentRedirect

class WwwRedirectMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        host = request.get_host().split(":")[0]  # strips port if present
        if host == "tellused.com":
            return HttpResponsePermanentRedirect(
                "https://www.tellused.com" + request.get_full_path()
            )
        return self.get_response(request)
