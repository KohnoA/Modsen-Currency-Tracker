import { lazy, Suspense } from 'react';

import { PageLoader } from '@/components/PageLoader';

const NotFound = lazy(() => import('./NotFound'));

export default function NotFoundLazy() {
  return (
    <Suspense fallback={<PageLoader />}>
      <NotFound />
    </Suspense>
  );
}
