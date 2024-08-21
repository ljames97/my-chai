// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './components/product-page/ProductPage';
import { collections, products } from './components/data';
import Header from './components/layout/Header.jsx'
import ShippingHeader from './components/layout/ShippingHeader.jsx'
import Footer from './components/layout/Footer.jsx'
import CartModal from './components/cart-modal/CartModal.jsx'
import './styles/main.scss';
import { useEffect, useState } from 'react';
import CollectionPage from './components/collection-page/CollectionPage';

const App = () => {
  const collection = collections[0];

  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const toggleCartModal = () => {
    setIsCartModalVisible(!isCartModalVisible);
  };

  useEffect(() => {
    if (isCartModalVisible) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }, [isCartModalVisible]);

  return (
    <Router >
      {isCartModalVisible && <CartModal toggleCartModal={toggleCartModal} />}
      <ShippingHeader />
      <Header toggleCartModal={toggleCartModal} />

      <Routes>
        <Route path='/collection' element={<CollectionPage collection={collection}/>} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
