import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import cn from 'classnames';
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
    pageTheme,
    parsedPageTheme,
    setPageTheme,
  } = useAppContext();

  const { pathname } = useLocation();
  const page = document.querySelector('#app-page');
  const isThemeDark = pageTheme === 'Dark';

  useEffect(() => {
    setCartProductsAmount(parsedCartProductsAmount);
    setFavoriteProductsAmount(parsedFavoriteProductsAmount);
    setPageTheme(parsedPageTheme);
  });

  useEffect(() => {
    if (page) {
      setTimeout(() => {
        page.scrollTop = 0;
      }, 0);
    }
  }, [page, pathname]);

  return (
    <div
      className={cn('App', {
        'theme--light': !isThemeDark,
        'theme--dark': isThemeDark,
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
