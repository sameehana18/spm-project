from django.contrib import admin
from django.urls import path
from books.views import book_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/books/', book_list, name='book-list'),
]