# Generated by Django 4.2.11 on 2024-03-15 11:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0005_remove_book_image_url_book_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='image',
            field=models.ImageField(default='images/defualtnaru.jpg', upload_to='images/'),
        ),
    ]
