import { Suspense, lazy } from 'react';

const Timeline = lazy(() => import('./Timeline'));

export default function TimelineLazy() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Timeline />
    </Suspense>
  );
}
