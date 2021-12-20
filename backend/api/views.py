

from django.http import HttpResponse, FileResponse

from .models import Resume
from .serializers import ResumeSerializer
from rest_framework import viewsets


def download(request):
    response = FileResponse(open('backend/media/isse/resume1/Isse_Nur_Resume.pdf', 'rb'))
    return response

# class ResumeViewSet(viewsets.ModelViewSet):
#     queryset = Resume.objects.all()
#     serializer_class = ResumeSerializer

