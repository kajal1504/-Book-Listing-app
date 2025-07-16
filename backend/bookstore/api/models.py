from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Order(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.customer_name} ordered {self.book}"
