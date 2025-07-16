import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/books/')
    //   .then(res => res.json())
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">📚 Book List</h2>
        <ul className="space-y-4">
          {books.map(book => (
            <li
              key={book.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="text-gray-700">
                {book.title} by {book.author}
              </span>
              <Link
                to={`/order/${book.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
              >
                Order
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
