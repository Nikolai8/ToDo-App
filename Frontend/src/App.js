import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="App-title">
          <p>ToDo-App</p>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="App-ListContainer">
          <p>ToDo-Liste</p>
          
          <div className="App-ListItemContainer"><p>Eintrag 1</p></div>
          <div><p>Eintrag 2</p></div>
          <div><p>Eintrag 3</p></div>
        </div>
      </main>
    </div>
  );
}

export default App;
