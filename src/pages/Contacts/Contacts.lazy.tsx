import { Suspense, lazy } from 'react';
import PageLoader from '@/components/PageLoader';

const Contacts = lazy(() => import('./Contacts'));

export default function ContactsLazy() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Contacts />
    </Suspense>
  );
}
