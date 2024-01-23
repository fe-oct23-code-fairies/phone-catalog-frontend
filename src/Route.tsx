import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home';
import { Phones } from './pages/Phones';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';
import { NotFoundPage } from './pages/NotFoundPage';
import { Cart } from './pages/Cart';
import { Favorites } from './pages/Favorites';
import { CatalogContextProvider } from './context';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to=".." />} />

        <Route
          path="phones"
          element={
            (
              <CatalogContextProvider>
                <Phones />
              </CatalogContextProvider>
            )
          }
        />
        <Route path="tablets" element={<Tablets />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="favorites" element={<Favorites />} />

        <Route path="checkout" element={<Cart />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
