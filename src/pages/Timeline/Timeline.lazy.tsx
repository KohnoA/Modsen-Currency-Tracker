import { lazy, Suspense } from 'react';

import PageLoader from '@/components/PageLoader';

const Timeline = lazy(() => import('./Timeline'));

export default function TimelineLazy() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Timeline />
    </Suspense>
  );
}
