import React from 'react';
import './App.css';
import chibi from './assets/chibi.png';
import logo from './assets/logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chibi} className="App-logo" alt="logo" />
        <img src={logo} className="logo" alt="Sayonika"/>
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
