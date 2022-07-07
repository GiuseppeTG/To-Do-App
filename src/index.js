import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import Navbar from './components/Navbar';
import Background from './components/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Background />
      <Navbar />
      <App />   
  </>  
  
);
