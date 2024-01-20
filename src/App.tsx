import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="App-page">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
