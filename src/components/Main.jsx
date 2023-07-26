import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Posts from './Posts';

export default function Main() {
  return (
    <main id='main'>
      <Routes>
        <Route path="/" element={<Navigate to="/posts/1" />} />
        <Route path="/posts/:page" element={<Posts />} />
      </Routes>
    </main>
  );
}
