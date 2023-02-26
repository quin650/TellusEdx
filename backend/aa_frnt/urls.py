from django.urls import path
from .views import indexView  

urlpatterns = [
    path('', indexView), 
    path('home', indexView), 
    path('software', indexView),
    path('explore', indexView),
    path('login', indexView),
    path('register', indexView), 
]