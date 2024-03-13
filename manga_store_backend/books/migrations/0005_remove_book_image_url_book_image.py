# Generated by Django 4.2.11 on 2024-03-13 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_remove_book_image_book_image_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='image_url',
        ),
        migrations.AddField(
            model_name='book',
            name='image',
            field=models.ImageField(default='images/108_i0ZJRjg.jpg', upload_to='images/'),
        ),
    ]