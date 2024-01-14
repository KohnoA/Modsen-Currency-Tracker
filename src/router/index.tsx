import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from './routes';

import Home from '@/pages/Home';
import BankCard from '@/pages/BankCard';
import Contacts from '@/pages/Contacts';
import NotFound from '@/pages/NotFound';

import { TimelineLazy } from '@/pages/Timeline';

const router = [
  { path: AppRoutes.HOME, element: <Home /> },
  { path: AppRoutes.TIMELINE, element: <TimelineLazy /> },
  { path: AppRoutes.BANK_CARD, element: <BankCard /> },
  { path: AppRoutes.CONTACTS, element: <Contacts /> },
  { path: '*', element: <NotFound /> },
];

export default function Router() {
  return (
    <Routes>
      {router.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
