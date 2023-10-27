import React from 'react';
import List from './List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersonProvider } from './PersonProvider';
import Form from './Form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PersonProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/create" element={<Form />} />
            <Route path="/edit/:id" element={<Form />} />
            <Route path="*" element={<div>OH NO!</div>} />
          </Routes>
        </BrowserRouter>
      </PersonProvider>
    </QueryClientProvider>
  );
};

export default App;
