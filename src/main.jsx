import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
