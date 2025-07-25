import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Web3Provider } from './providers/Web3Provider';
import './styles/styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);