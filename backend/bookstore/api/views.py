from django.http import HttpResponse
from rest_framework.decorators import api_view # type: ignore
from rest_framework.response import Response # type: ignore
from .models import Book, Order
from .serializers import BookSerializer, OrderSerializer

# ✅ HTML Home View
def home(request):
    return HttpResponse("""
        <h1>Welcome to the Book API</h1>
        <p>Use the following endpoints:</p>
        <ul>
            <li><strong>/books/</strong> – to get all books (GET)</li>
            <li><strong>/order/</strong> – to place an order (POST)</li>
        </ul>
    """)

# ✅ Get list of books
@api_view(['GET'])
def get_books(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

# ✅ Place an order
@api_view(['POST'])
def place_order(request):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            "message": "Order placed successfully!",
            "book_id": serializer.data["book"],
            "customer_name": serializer.data["customer_name"]
        })
    return Response(serializer.errors, status=400)
