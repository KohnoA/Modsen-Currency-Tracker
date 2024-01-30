import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/components/PageLoader';
import { BankCard } from '@/pages/BankCard';
import { Contacts } from '@/pages/Contacts';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';
import { Timeline } from '@/pages/Timeline';

import { AppRoutes } from './routes';

const router = [
  { path: AppRoutes.HOME, element: <Home /> },
  { path: AppRoutes.TIMELINE, element: <Timeline /> },
  { path: AppRoutes.BANK_CARD, element: <BankCard /> },
  { path: AppRoutes.CONTACTS, element: <Contacts /> },
  { path: AppRoutes.NOT_FOUND, element: <NotFound /> },
];

export const Router = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {router.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
