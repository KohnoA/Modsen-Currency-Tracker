import { Layout } from './layout';
import { Router } from './router';

import './styles/index.scss';

export const App = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};
