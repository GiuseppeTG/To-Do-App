import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='circle circle1'></div>
  <div className='circle circle2'></div>
  <div className='circle circle3'></div>
  <div className='circle circle4'></div>
  <div className='circle circle5'></div>
  <div className='circle circle6'></div>
  <App />
  </>
  
);
