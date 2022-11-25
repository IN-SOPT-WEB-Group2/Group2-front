import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Router from './pages/Router';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
