import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProductPage from './components/product-page/ProductPage';
import Header from './components/layout/Header.jsx';
import ShippingHeader from './components/layout/ShippingHeader.jsx';
import Footer from './components/layout/Footer.jsx';
import CartModal from './components/cart-modal/CartModal.jsx';
import './styles/main.scss';
import { useEffect, useState } from 'react';
import CollectionPage from './components/collection-page/CollectionPage';
import MobileMenu from './components/mobile-menu/MobileMenu';
import CheckoutPage from './components/checkout-page/CheckoutPage';

const App = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

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
    <Router>
      <MainContent 
        toggleCartModal={toggleCartModal} 
        toggleMobileMenu={toggleMobileMenu} 
        isMobileMenuVisible={isMobileMenuVisible}
        isCartModalVisible={isCartModalVisible}
      />
    </Router>
  );
};

const MainContent = ({ toggleCartModal, toggleMobileMenu, isMobileMenuVisible, isCartModalVisible }) => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/checkout';

  return (
    <>
      {isMobileMenuVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
      {isCartModalVisible && <CartModal toggleCartModal={toggleCartModal} />}
      
      {!isCheckoutPage && <ShippingHeader />}
      {!isCheckoutPage && <Header toggleCartModal={toggleCartModal} toggleMobileMenu={toggleMobileMenu} />}

      <Routes>
        <Route path='/collection/:path' element={<CollectionPage />} />
        <Route path='/product/:path' element={<ProductPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
      </Routes>

      {!isCheckoutPage && <Footer />}
    </>
  );
};

export default App;
