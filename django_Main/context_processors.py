import os

def runtime_config(request):
    return {
        "RUNTIME_CONFIG": {
            "REACT_APP_LOCAL": os.getenv("REACT_APP_LOCAL", "0"),
            "API_BASE_URL": os.getenv("API_BASE_URL", ""),
            "DJANGO_ENV": os.getenv("DJANGO_ENV", "production"),
        }
    }
