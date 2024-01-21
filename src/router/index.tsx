import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from './routes';

import { TimelineLazy } from '@/pages/Timeline';
import { HomeLazy } from '@/pages/Home';
import { ContactsLazy } from '@/pages/Contacts';
import { BankCardLazy } from '@/pages/BankCard';
import { NotFoundLazy } from '@/pages/NotFound';

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
