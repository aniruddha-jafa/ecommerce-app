from rest_framework import generics 
from .models import Problem
from .serializers import ProblemSerializer

class ProblemList(generics.ListCreateAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

class ProblemDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer