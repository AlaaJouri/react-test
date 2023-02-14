import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";

function App() {
  const name:string="Alaa";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h3>Hallo {name}</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greetings name={name}/>
      </header>
    </div>
  );
}

export default App;
