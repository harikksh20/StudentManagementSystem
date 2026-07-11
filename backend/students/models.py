from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    course = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

    def __str__(self):
        return self.name