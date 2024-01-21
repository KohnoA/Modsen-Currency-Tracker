import { Suspense, lazy } from 'react';

const NotFound = lazy(() => import('./NotFound'));

export default function NotFoundLazy() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NotFound />
    </Suspense>
  );
}
