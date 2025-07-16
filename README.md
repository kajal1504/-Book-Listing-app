📚 Book Listing App
This is a simple Book Listing app built using:
✅ Backend: Django REST Framework
✅ Frontend: React Native (using Expo)

🔧 How to Run Backend (Django)
Step 1: Go to the backend folder:-cd backend
Step 2: Create virtual environment:-python -m venv env
Step 3: Activate the virtual environment:-For Windows:env\Scripts\activate , For Mac/Linux:source env/bin/activate
Step 4: Install required packages:-pip install django djangorestframework django-cors-headers
Step 5: Make migrations and apply them:-python manage.py makemigrations, and python manage.py migrate
Step 6: Add some books (optional):-
from api.models import Book
Book.objects.create(title="Book A", author="Author A")
Book.objects.create(title="Book B", author="Author B")
exit()
Step 7: Run the server[Go to bookstore: cd bookstore]:-python manage.py runserver
The server will run at:
📍 http://127.0.0.1:8000/ :-Home
📍 http://127.0.0.1:8000/books :- booklist
📍 http://127.0.0.1:8000/order :- orderplace
📍 http://127.0.0.1:8000/admin :- Admin

📱 How to Run Frontend (React Native)
Step 1: Go to the frontend folder:-cd frontend
Step 2: Install dependencies:-npm install
Step 3: Start the app:-npm run dev


