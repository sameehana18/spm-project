from django.contrib import admin
from .models import Book

class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'price', 'publication_date')
    list_filter = ('author', 'genres')
    search_fields = ('title', 'author')
    filter_horizontal = ('genres',)

admin.site.register(Book, BookAdmin)
