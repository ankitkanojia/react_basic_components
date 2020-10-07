import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import { registerServiceWorker } from "./register-sw";
import { BrowserRouter } from 'react-router-dom';

registerServiceWorker();

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById("root"));