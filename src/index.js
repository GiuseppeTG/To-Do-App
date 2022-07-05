import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import About from './components/About';
import Background from './components/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Background />
      <Navbar />
      <App />   
  </>  
  
);
