from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Book
from .serializers import BookSerializer
from django.db.models import Q

@api_view(['GET'])
def book_list(request):
    search_query = request.GET.get('search', '')

    if search_query:
        # Clean the search query to remove non-alphanumeric characters and convert to lowercase
        cleaned_query = ''.join(e for e in search_query if e.isalnum() or e.isspace()).strip().lower()
        # Use Q objects to filter by title or author
        query = Q(title__icontains=cleaned_query) | Q(author__icontains=cleaned_query)
        books = Book.objects.filter(query).order_by('publication_date')
    else:
        books = Book.objects.all().order_by('publication_date')

    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)
