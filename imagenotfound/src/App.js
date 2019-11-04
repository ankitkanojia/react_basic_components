import React from 'react';
import './App.css';
import ImageVerification from './ImageVerification';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageVerification src="logo.svg"  alt="logo" className="App-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
