from .models import Resume
from .serializers import ResumeSerializer
from rest_framework import viewsets


class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
