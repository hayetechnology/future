# Generated by Django 3.2.9 on 2021-11-10 21:06

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('resume_pdf', models.FileField(upload_to=api.models.upload_path)),
            ],
        ),
    ]