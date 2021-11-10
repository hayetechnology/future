from django.urls import path, include
from .views import ResumeViewSet
from rest_framework.routers import DefaultRouter

# resume_list, resume_details

router = DefaultRouter()
router.register('resumes', ResumeViewSet, basename='resumes')

urlpatterns = [
    path('api/', include(router.urls))
]