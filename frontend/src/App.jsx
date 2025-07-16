import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './Components/BookList';
import OrderForm from './Components/OrderForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/order/:bookId" element={<OrderForm />} />
      </Routes>
    </Router>
  );
};

export default App;
