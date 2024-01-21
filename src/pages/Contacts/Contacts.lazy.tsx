import { Suspense, lazy } from 'react';

const Contacts = lazy(() => import('./Contacts'));

export default function ContactsLazy() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Contacts />
    </Suspense>
  );
}
