import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/reset.css'
import './css/global.css'
import JogosProvider from './context/Jogos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JogosProvider>
      <App />
    </JogosProvider>
  </React.StrictMode>
);

