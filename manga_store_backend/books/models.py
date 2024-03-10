import datetime
from django.db import models

class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/')
    author = models.CharField(max_length=100)
    genres = models.ManyToManyField(Genre)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    publication_date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.title
