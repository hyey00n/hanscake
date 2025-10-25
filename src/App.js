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
  const maxWidth = '448px';

  const handleCakeClick = (cake) => {
    setSelectedCake(cake);
    setCurrentPage('detail');
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container" style={{ maxWidth }}>
      <Header isLoggedIn={isLoggedIn} onLoginClick={handleLoginClick} />

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
        />
      )}
      
      {currentPage === 'points' && (
        <PointsPage onBack={() => setCurrentPage('home')} />
      )}
      
      <BottomNav currentPage={currentPage} onPageChange={setCurrentPage} maxWidth={maxWidth} />
    </div>
  );
};

export default HansRabbitApp;