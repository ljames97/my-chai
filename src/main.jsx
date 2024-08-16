import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './store/CartProvider.jsx'
import Header from './components/layout/Header.jsx'
import ShippingHeader from './components/layout/ShippingHeader.jsx'
import Footer from './components/layout/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ShippingHeader />
      <Header />
      <App />
      <Footer />
    </CartProvider>
  </React.StrictMode>,
)
