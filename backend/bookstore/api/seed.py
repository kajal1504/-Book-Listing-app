from api.models import Book

def run():
    Book.objects.create(title="Book A", author="Author A")
    Book.objects.create(title="Book B", author="Author B")
    print("Sample books added.")
