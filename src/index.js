
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from './CryptoContext';
import { Buffer } from 'buffer';
window.Buffer = Buffer; // Assign Buffer to the global object
// This event listener catches unhandled errors

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
    <App/>
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById('root')
);