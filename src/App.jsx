import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProductPage from './components/product-page/ProductPage';
import Header from './components/layout/Header.jsx';
import ShippingHeader from './components/layout/ShippingHeader.jsx';
import Footer from './components/layout/Footer.jsx';
import CartModal from './components/cart-modal/CartModal.jsx';
import './styles/main.scss';
import { useEffect } from 'react';
import CollectionPage from './components/collection-page/CollectionPage';
import MobileMenu from './components/mobile-menu/MobileMenu';
import CheckoutPage from './components/checkout-page/CheckoutPage';
import HomePage from './components/home-page/HomePage';
import ScrollToTop from './components/global/ScrollToTop';
import Journal from './components/journal/Journal';
import AboutUs from './components/info-pages/AboutUs';
import Contact from './components/info-pages/Contact';
import JournalEntry from './components/journal/JournalEntry';
import useToggle from './hooks/useToggle';
import AccountModalManager from './components/customer-account/AccountModalManager';
import { useTheme } from './store/ThemeContext';
import AccountDetails from './components/customer-account/AccountDetails';
import OrderConfirmation from './components/checkout-page/OrderConfirmation';
import OrderHistory from './components/customer-account/order-history/OrderHistory';
import OrderPage from './components/customer-account/order-history/OrderPage';

const App = () => {
  const [isMobileMenuVisible, toggleMobileMenu] = useToggle(false);
  const [isCartModalVisible, toggleCartModal] = useToggle(false);
  const [isAccountModalManagerVisible, toggleAccountModalManager] = useToggle(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isCartModalVisible) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }, [isCartModalVisible]);

  return (
    <>
      <ScrollToTop />
      <MainContent 
        toggleCartModal={toggleCartModal} 
        toggleMobileMenu={toggleMobileMenu} 
        toggleAccountModalManager={toggleAccountModalManager}
        isMobileMenuVisible={isMobileMenuVisible}
        isCartModalVisible={isCartModalVisible}
        isAccountModalManagerVisible={isAccountModalManagerVisible}
      />
      </>
  );
};

const MainContent = ({ toggleCartModal, toggleMobileMenu, toggleAccountModalManager, isMobileMenuVisible, isCartModalVisible, isAccountModalManagerVisible }) => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/checkout';
  const isHomePage = location.pathname === '/';

  return (
    <div className={`app-container, ${isCartModalVisible || isAccountModalManagerVisible ? 'blur' : ''}`}>
      {isMobileMenuVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu} toggleAccountModalManager={toggleAccountModalManager} />}
      {isCartModalVisible && <CartModal toggleCartModal={toggleCartModal} />}
      {isAccountModalManagerVisible && <AccountModalManager toggleAccountModalManager={toggleAccountModalManager} toggleMobileMenu={toggleMobileMenu} isMobileMenuVisible={isMobileMenuVisible} />}
      
      <div className="header-container">
        <ShippingHeader />
        {!isCheckoutPage && <Header toggleCartModal={toggleCartModal} toggleMobileMenu={toggleMobileMenu} isHomePage={isHomePage} toggleAccountModalManager={toggleAccountModalManager} />} 
      </div>

      <div className="content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/collection/:path' element={<CollectionPage />} />
          <Route path='/product/:path' element={<ProductPage />} />
          <Route path='/journal/:path' element={<JournalEntry />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/order-confirmation' element={<OrderConfirmation />} />
          <Route path='/account-details' element={<AccountDetails />} />
          <Route path='/order-history' element={<OrderHistory />} />
          <Route path='order-page' element={<OrderPage />} />

        </Routes>
      </div>

      {!isCheckoutPage && <Footer />}
    </div>
  );
};

export default App;
