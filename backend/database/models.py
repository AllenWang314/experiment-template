from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.
class trial(models.Model):
    name = models.CharField(max_length=100)
    sequence_1 = ArrayField(models.BigIntegerField(), size = 100)
    sequence_2 = ArrayField(models.BigIntegerField(), size = 100)
    sequence_3 = ArrayField(models.BigIntegerField(), size = 100)
    responses = ArrayField(models.CharField(max_length=100), size = 200)