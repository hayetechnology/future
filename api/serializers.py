from rest_framework import serializers
from .models import Resume

#Resume Serializer
class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ['id', 'title', 'resume_pdf']