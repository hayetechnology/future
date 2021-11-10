from django.contrib import admin
from .models import Resume

# Register your models here.


@admin.register(Resume)
class ResumeModel(admin.ModelAdmin):
    list_filter = ('title', 'resume_pdf')
    list_display = ('title', 'resume_pdf')

