// App.jsx

import ProductPage from './components/product-page/ProductPage';
import products from './components/data';
import Header from './components/layout/Header.jsx'
import ShippingHeader from './components/layout/ShippingHeader.jsx'
import Footer from './components/layout/Footer.jsx'
import CartModal from './components/cart-modal/CartModal.jsx'
import './styles/main.scss';
import { useEffect, useState } from 'react';

const App = () => {

  const product = products[0];

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
    <>
      {isCartModalVisible && <CartModal toggleCartModal={toggleCartModal} />}
      <ShippingHeader />
      <Header toggleCartModal={toggleCartModal} />
      <ProductPage product={product}/>
      <Footer />
    </>
  )
}

export default App
