from django.contrib import admin
from .models import Resume

# Registering Resume Model to be filtered and displayed in the admin panel.
@admin.register(Resume)
class ResumeModel(admin.ModelAdmin):
    list_filter = ('title', 'resume_pdf')
    list_display = ('title', 'resume_pdf')

