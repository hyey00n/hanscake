import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import SignaturePage from './pages/SignaturePage';
import DetailPage from './pages/DetailPage';
import PointsPage from './pages/PointsPage';
import AlarmPage from './pages/AlarmPage';
import EventPage from './pages/EventPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage'; // 추가!

const HansRabbitApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCake, setSelectedCake] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const maxWidth = '600px';

  const handleCakeClick = (cake) => {
    setSelectedCake(cake);
    setQuantity(1);
    setCurrentPage('detail');
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container" style={{ maxWidth }}>
      <Header 
        isLoggedIn={isLoggedIn} 
        onLoginClick={handleLoginClick}
        pageType={currentPage}
        selectedCake={selectedCake}
        onPageChange={setCurrentPage} // 추가!
        onBack={() => {
          if (currentPage === 'detail' || currentPage === 'signature' || currentPage === 'points') {
            setCurrentPage('home');
          } else if (currentPage === 'cart') {
            setCurrentPage('home');
          } else if (currentPage === 'checkout') {
            setCurrentPage('cart');
          } else if (currentPage === 'login') {
            setCurrentPage('home');
          }
        }}
      />

      {currentPage === 'event' && (
        <EventPage 
          onCakeClick={handleCakeClick} 
          onPageChange={setCurrentPage}
          isLoggedIn={isLoggedIn}
        />
      )}  
      {currentPage === 'home' && (
        <HomePage 
          onCakeClick={handleCakeClick} 
          onPageChange={setCurrentPage}
          isLoggedIn={isLoggedIn}
        />
      )}    
      {currentPage === 'alarm' && (
        <AlarmPage 
          onCakeClick={handleCakeClick} 
          onPageChange={setCurrentPage}
          isLoggedIn={isLoggedIn}
        />
      )}  

      {currentPage === 'signature' && (
        <SignaturePage 
          onCakeClick={handleCakeClick} 
          onBack={() => setCurrentPage('home')}
        />
      )}
      {currentPage === 'detail' && selectedCake && (
        <DetailPage 
          cake={selectedCake} 
          onBack={() => setCurrentPage('home')}
          maxWidth={maxWidth}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
      
      {currentPage === 'points' && (
        <PointsPage onBack={() => setCurrentPage('home')} />
      )}

      {currentPage === 'cart' && (
        <CartPage 
          onBack={() => setCurrentPage('home')}
          onCheckout={() => setCurrentPage('checkout')}
        />
      )}

      {currentPage === 'checkout' && (
        <CheckoutPage 
          onBack={() => setCurrentPage('cart')}
        />
      )}

      {currentPage === 'login' && ( // 추가!
        <LoginPage 
          onLogin={() => {
            setIsLoggedIn(true);
            setCurrentPage('home');
          }}
          onBack={() => setCurrentPage('home')}
        />
      )}
      
      <BottomNav 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        maxWidth={maxWidth}
        selectedCake={selectedCake}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
};

export default HansRabbitApp;