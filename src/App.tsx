import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useAppContext } from './context/AppContext';

export const App: React.FC = () => {
  const {
    setCartProductsAmount,
    parsedCartProductsAmount,
    setFavoriteProductsAmount,
    parsedFavoriteProductsAmount,
  } = useAppContext();

  useEffect(() => {
    setCartProductsAmount(parsedCartProductsAmount);
    setFavoriteProductsAmount(parsedFavoriteProductsAmount);
  });

  return (
    <div className="App">
      <Header />

      <div className="App__page" id="app-page">
        <div className="App__page-content">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;