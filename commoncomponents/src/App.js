import React from 'react';
import './App.css';
import Header from './Layout/Header';
import Main from './Layout/Main';

function App() {
  return (
    <React.Fragment>
        <Header />
        <main className="container">
          <Main />
        </main>
      </React.Fragment>
  );
}



export default App;
