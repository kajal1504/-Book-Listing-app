from django.urls import path
from .views import get_books, place_order, home

urlpatterns = [
    path('', home),
    path('books/', get_books),
    path('order/', place_order),
]
