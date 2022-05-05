# Generated by Django 4.0.4 on 2022-05-05 08:24

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('problems', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='problem',
            name='dislikes',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='problem',
            name='draft',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='problem',
            name='likes',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='problem',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
