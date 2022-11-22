import logo from './logo.svg';
import './App.css';
import React from 'react';

import ToDoList from './ToDoList.js'

//let todoItemContainer = React.createRef();

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="App-title">
          <p>ToDo-App</p>
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <ToDoList />
      </main>
    </div>
  );
}

export default App;