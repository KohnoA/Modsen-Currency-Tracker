import { lazy, Suspense } from 'react';

import PageLoader from '@/components/PageLoader';

const Home = lazy(() => import('./Home'));

export default function HomeLazy() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Home />
    </Suspense>
  );
}
