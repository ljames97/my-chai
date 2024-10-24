import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './store/CartProvider.jsx'
import { ThemeProvider } from './store/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider>
      <App />
      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>,
)