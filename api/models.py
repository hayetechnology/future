from django.db import models

#which path to upload the resume pdf file 
def upload_path(instance, filename):
    return '/'.join(['isse', str(instance.title), filename])

#Resume Model
class Resume(models.Model):
    title = models.CharField(max_length=100)
    resume_pdf = models.FileField(upload_to=upload_path)

    def __str__(self):
        return self.title