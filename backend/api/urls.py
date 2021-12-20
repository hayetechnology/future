from django.urls import path, include


from .views import download
from rest_framework.routers import DefaultRouter

# resume_list, resume_details

urlpatterns = [
    path('api/resumes/1/', download)
]
