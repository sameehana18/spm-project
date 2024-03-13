# Generated by Django 4.2.11 on 2024-03-13 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_book_publication_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='image',
        ),
        migrations.AddField(
            model_name='book',
            name='image_url',
            field=models.URLField(default='https://dw9to29mmj727.cloudfront.net/misc/newsletter-naruto3.png'),
        ),
    ]