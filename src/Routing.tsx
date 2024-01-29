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
import { Favorites } from './pages/Favorites/Favorites';
import { CatalogContextProvider }
  from './context/CatalogContext/CatalogContext';
import { CartContextProvider } from './context/CartContext';
import { ProductCard } from './pages/ProductCard/ProductCard';
import { AppContextProvider } from './context/AppContext';
import { CardItemPage } from './pages/cartItemPage';

export const Routing = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={(
          <AppContextProvider>
            <App />
          </AppContextProvider>
        )}
      >
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
          
          <Route
            path=":itemId"
            element={<CardItemPage />}
          />
        </Route>
        <Route path="tablets">
          <Route
            index
            element={(
              <CatalogContextProvider>
                <Tablets />
              </CatalogContextProvider>
            )}
          />
          <Route
            path=":itemId"
            element={<ProductCard productType="tablets" />}
          />
        </Route>

        <Route path="accessories">
          <Route
            index
            element={(
              <CatalogContextProvider>
                <Accessories />
              </CatalogContextProvider>
            )}
          />
          <Route
            path=":itemId"
            element={<ProductCard productType="accessories" />}
          />
        </Route>

        <Route path="favorites" element={<Favorites />} />

        <Route
          path="checkout"
          element={(
            <CartContextProvider>
              <Cart />
            </CartContextProvider>
          )}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);
