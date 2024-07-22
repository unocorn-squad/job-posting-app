import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import './themes/reset.css';
import './themes/index.css';
import { theme as lightTheme } from './themes/light.js';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter basename='/job-posting-app/'>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
