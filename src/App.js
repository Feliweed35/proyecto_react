import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          alt="Logo de React" 
          className="App-logo" 
          aria-label="Logo de React"
        />
        <h1 className="App-title">¡Hola Mundo!</h1>
        <p className="App-description">
          Este es un proyecto inicial de React.
        </p>
        <p className="App-instructions">
          Edita <code>src/App.js</code> y guarda para recargar.
        </p>
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Aprende React"
        >
          Aprende React
        </a>
      </header>
    </div>
  );
};

export default App;
