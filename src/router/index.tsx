import { Route, Routes } from 'react-router-dom';

import { BankCardLazy } from '@/pages/BankCard';
import { ContactsLazy } from '@/pages/Contacts';
import { HomeLazy } from '@/pages/Home';
import { NotFoundLazy } from '@/pages/NotFound';
import { TimelineLazy } from '@/pages/Timeline';

import { AppRoutes } from './routes';

const router = [
  { path: AppRoutes.HOME, element: <HomeLazy /> },
  { path: AppRoutes.TIMELINE, element: <TimelineLazy /> },
  { path: AppRoutes.BANK_CARD, element: <BankCardLazy /> },
  { path: AppRoutes.CONTACTS, element: <ContactsLazy /> },
  { path: '*', element: <NotFoundLazy /> },
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
