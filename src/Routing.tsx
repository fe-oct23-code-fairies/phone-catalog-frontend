import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home';
import { Phones } from './pages/Phones';
import { NotFoundPage } from './pages/NotFoundPage';
import { Cart } from './pages/Cart';

export const Routing = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to=".." />} />

        <Route path="phones" element={<Phones />} />

        <Route path="favorites" element={<Cart />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
