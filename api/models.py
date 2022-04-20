from django.db import models

# Create your models here.
def upload_path(instance, filename):
    return '/'.join(['isse', str(instance.title), filename])


class Resume(models.Model):
    title = models.CharField(max_length=100)
    resume_pdf = models.FileField(upload_to=upload_path)

    def __str__(self):
        return self.title