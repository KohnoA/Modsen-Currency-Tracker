import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from '@/components/PageLoader';

import { AppRoutes } from './routes';

const BankCard = lazy(() => import('@/pages/BankCard/lazy'));
const Home = lazy(() => import('@/pages/Home/lazy'));
const Timeline = lazy(() => import('@/pages/Timeline/lazy'));
const Contacts = lazy(() => import('@/pages/Contacts/lazy'));
const NotFound = lazy(() => import('@/pages/NotFound/lazy'));

const router = [
  { path: AppRoutes.HOME, element: <Home /> },
  { path: AppRoutes.TIMELINE, element: <Timeline /> },
  { path: AppRoutes.BANK_CARD, element: <BankCard /> },
  { path: AppRoutes.CONTACTS, element: <Contacts /> },
  { path: AppRoutes.NOT_FOUND, element: <NotFound /> },
];

export const Router = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {router.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  </Suspense>
);
