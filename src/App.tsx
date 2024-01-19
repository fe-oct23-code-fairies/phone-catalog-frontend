import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Outlet />
    </div>
  );
};

export default App;
