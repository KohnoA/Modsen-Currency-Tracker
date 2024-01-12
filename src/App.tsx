import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </>
  );
}
