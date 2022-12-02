import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage, OrderPage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OrderPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
