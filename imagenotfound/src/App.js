import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

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
