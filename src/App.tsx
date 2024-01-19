import './App.css';

const App: React.FC = () => {
  const a = 1;
  const b = 1;

  if (a === b) {
    return <></>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Zamn</p>
      </header>
    </div>
  );
};

export default App;
