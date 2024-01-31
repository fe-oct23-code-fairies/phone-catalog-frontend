import classNames from 'classnames';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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

  const { pathname } = useLocation();
  const page = document.querySelector('#app-page');

  useEffect(() => {
    setCartProductsAmount(parsedCartProductsAmount);
    setFavoriteProductsAmount(parsedFavoriteProductsAmount);
  });

  useEffect(() => {
    if (page) {
      setTimeout(() => {
        page.scrollTop = 0;
      }, 0);
    }
  }, [page, pathname]);

  const location = useLocation();

  return (
    <div className={classNames('App', {
      'App--blue-bg': location.pathname.includes('authorization'),
    })}
    >
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
