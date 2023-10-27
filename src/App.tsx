import React, { useTransition } from 'react';
import List from './List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersonProvider } from './PersonProvider';
import Form from './Form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <LanguageSwitcher />
      <h1>{t('HELLO')}</h1>
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
    </>
  );
};

export default App;
