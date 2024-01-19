import './App.scss';
import { NotFoundPage } from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Zamn</p>
      </header>

      <div className="main-container">
        <NotFoundPage />
      </div>
    </div>
  );
};

export default App;
