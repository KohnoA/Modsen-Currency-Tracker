import { lazy, Suspense } from 'react';

import PageLoader from '@/components/PageLoader';

const BankCard = lazy(() => import('./BankCard'));

export default function BankCardLazy() {
  return (
    <Suspense fallback={<PageLoader />}>
      <BankCard />
    </Suspense>
  );
}
