from django.urls import path 
from .views import ProblemList, ProblemDetail

urlpatterns = [
    path('<str:pk>', ProblemDetail.as_view()),
    path('', ProblemList.as_view()),
]
