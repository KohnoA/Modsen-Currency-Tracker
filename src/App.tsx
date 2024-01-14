import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Timeline from '@/pages/Timeline';
import NotFound from './pages/NotFound';
import Layout from './layout';
import './styles/index.scss';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
