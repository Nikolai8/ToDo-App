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
          <p>Meine Aufgaben</p>
          
          <div className="App-ListItemContainer">
            <div className="App-ListItemText">Eintrag 1</div>
          </div>
          <div className="App-ListItemContainer">
            <div className="App-ListItemText">Eintrag 2</div>
          </div>
          <div className="App-ListItemContainer">
            <div className="App-ListItemText">Eintrag 3</div>
          </div>
          
        </div>

        <div className="App-ListAddItemContainer">
          Hinzufügen
        </div>
      </main>
    </div>
  );
}

export default App;
