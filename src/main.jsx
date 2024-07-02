import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'

import './themes/reset.css'
import './themes/theme.css'
import { lightTheme } from './themes/light.ts'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>    
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
