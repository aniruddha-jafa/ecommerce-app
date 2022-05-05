from django.db import models
from django.contrib.auth.models import User

class Problem(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=1000)
    
    created_at =  models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    draft = models.BooleanField(default=True)
    
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title