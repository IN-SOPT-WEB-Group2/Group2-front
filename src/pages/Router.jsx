import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';

import Home from './Home';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
