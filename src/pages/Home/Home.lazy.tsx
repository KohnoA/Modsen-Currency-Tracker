import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));

export default function HomeLazy() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Home />
    </Suspense>
  );
}
