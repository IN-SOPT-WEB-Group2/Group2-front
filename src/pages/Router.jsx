import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

import Home from './Home';
import Schedule from './Schedule';
import Detail from './Detail';
import MyPage from './MyPage';

export default function Router() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
