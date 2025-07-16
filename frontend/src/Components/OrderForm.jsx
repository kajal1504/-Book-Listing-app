import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const OrderForm = () => {
  const { bookId } = useParams();
  const [customerName, setCustomerName] = useState('');
  const [book, setBook] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/books/')
      .then(res => {
        const selected = res.data.find(b => b.id === parseInt(bookId));
        setBook(selected);
      });
  }, [bookId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/order/', {
      book: bookId,
      customer_name: customerName
    })
      .then(res => {
        setMessage(res.data.message);
        setCustomerName('');
      })
      .catch(() => {
        setMessage('❌ Failed to place order');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow-md">
        {book && <h3 className="text-xl font-semibold mb-4">Order: {book.title}</h3>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Place Order
          </button>
        </form>
        {message && (
          <p className="mt-4 text-green-600 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
