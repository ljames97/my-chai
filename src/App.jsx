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
import HomePage from './components/home-page/HomePage';
import ScrollToTop from './components/global/ScrollToTop';
import Journal from './components/journal/Journal';
import AboutUs from './components/info-pages/AboutUs';
import Contact from './components/info-pages/Contact';
import JournalEntry from './components/journal/JournalEntry';

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
      <ScrollToTop />
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
  const isHomePage = location.pathname === '/home';

  return (
    <div className="app-container">
      {isMobileMenuVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
      {isCartModalVisible && <CartModal toggleCartModal={toggleCartModal} />}
      
      <div className="header-container">
        <ShippingHeader />
        {!isCheckoutPage && <Header toggleCartModal={toggleCartModal} toggleMobileMenu={toggleMobileMenu} isHomePage={isHomePage} />} 
      </div>

      <div className="content">
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/collection/:path' element={<CollectionPage />} />
          <Route path='/product/:path' element={<ProductPage />} />
          <Route path='/journal/:path' element={<JournalEntry />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </div>

      {!isCheckoutPage && <Footer />}
    </div>
  );
};

export default App;
