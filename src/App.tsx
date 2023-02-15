import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";
import './App.css';
import Gallery from "./Gallery";
import Counter from "./Counter"



function App() {
    const characters = require('./characters.json');


    const [count, setCount] = useState<number>(0);



function increase()
    {
        setCount(count + 1)

    }

  //const name:string="Alaa";
 // const names:string[]=["Alaa","Jouri","Sara"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <div className="App">
              <h1>The Rick and Morty Characters Gallery</h1>
              <Gallery characters={characters} />
              <button onClick={increase}>Klick</button>
              <Counter/>

          </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
