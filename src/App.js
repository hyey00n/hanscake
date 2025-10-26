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

const HansRabbitApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCake, setSelectedCake] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quantity, setQuantity] = useState(1); // quantity state 추가
  const maxWidth = '600px';

  const handleCakeClick = (cake) => {
    setSelectedCake(cake);
    setQuantity(1); // 새로운 케이크 선택 시 수량 초기화
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
        onBack={() => {
          if (currentPage === 'detail' || currentPage === 'signature' || currentPage === 'points') {
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