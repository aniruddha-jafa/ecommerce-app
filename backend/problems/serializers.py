from rest_framework import serializers
from .models import Problem

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Problem