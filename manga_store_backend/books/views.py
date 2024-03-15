from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Book
from .serializers import BookSerializer

@api_view(['GET'])
def book_list(request):
    books = Book.objects.all().order_by('publication_date')
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)