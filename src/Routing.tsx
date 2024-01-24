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
import { ProductCard } from './pages/ProductCard/ProductCard';

export const Routing = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to=".." />} />

        <Route path="phones">
          <Route
            index
            element={(
              <CatalogContextProvider>
                <Phones />
              </CatalogContextProvider>
            )}
          />
          <Route path=":itemId" element={<ProductCard />} />
        </Route>
        <Route path="tablets">
          <Route index element={<Tablets />} />
          <Route path=":itemId" element={<ProductCard />} />
        </Route>

        <Route path="accessories">
          <Route index element={<Accessories />} />
          <Route path=":itemId" element={<ProductCard />} />
        </Route>

        <Route path="favorites" element={<Favorites />} />

        <Route path="checkout" element={<Cart />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
