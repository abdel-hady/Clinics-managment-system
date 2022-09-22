import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

