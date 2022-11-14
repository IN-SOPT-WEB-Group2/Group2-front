import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';

import Home from './Home';
import Schedule from './Schedule';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}
