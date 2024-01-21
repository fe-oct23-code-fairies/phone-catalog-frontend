import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { CartItem } from './components/CartItem';
import { Checkout } from './components/Checkout/Checkout';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="App__page">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
