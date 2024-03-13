# books/serializers.py

from rest_framework import serializers
from .models import Book, Genre

class BookSerializer(serializers.ModelSerializer):
    genres = serializers.SlugRelatedField(slug_field='name', queryset=Genre.objects.all(), many=True)

    class Meta:
        model = Book
        fields = ['id', 'title', 'image', 'genres', 'author', 'price']  # Add other fields as needed
