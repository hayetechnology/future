from django.http import HttpResponse, FileResponse

# Create your views here.

from .models import Resume
from .serializers import ResumeSerializer
from rest_framework import viewsets

# View function which sends a file response of the resume object when the API endpoint is hit
def download(request):
    response = FileResponse(open('media/isse/r1/Isse_Nur_Resume.pdf', 'rb'))
    return response



