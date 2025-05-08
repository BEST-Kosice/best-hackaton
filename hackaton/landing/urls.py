from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('sponsors/', views.sponsors_post, name='sponsors'),
]