from django.http import HttpResponse, FileResponse

# Create your views here.

from .models import Resume
from .serializers import ResumeSerializer
from rest_framework import viewsets


def download(request):
    response = FileResponse(open('media/isse/r1/Isse_Nur_Resume.pdf', 'rb'))
    return response

# class ResumeViewSet(viewsets.ModelViewSet):
#     queryset = Resume.objects.all()
#     serializer_class = ResumeSerializer

