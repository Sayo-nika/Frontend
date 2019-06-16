import React from 'react';
import './App.css';
import chibi from './assets/chibi.png';

import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
        <Navbar/>
      <header className="App-header">
        <img src={chibi} className="App-logo" alt="logo" />
        <p>
          Something great is coming, just you wait!
        </p>
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
