import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import SignaturePage from './pages/SignaturePage';
import EventPage from './pages/EventPage';
import PointsPage from './pages/PointsPage';
import AlarmPage from './pages/AlarmPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCake, setSelectedCake] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSize, setSelectedSize] = useState('2호');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // 장바구니 상태 관리
  const [cartItems, setCartItems] = useState([]);

  const handleCakeClick = (cake) => {
    setSelectedCake(cake);
    setQuantity(1);
    setSelectedSize('2호');
    setTotalPrice(cake.price);
    setCurrentPage('detail');
  };

  const handleBack = () => {
    if (currentPage === 'detail') {
      setCurrentPage('home');
    } else if (currentPage === 'cart') {
      setCurrentPage('home');
    } else if (currentPage === 'checkout') {
      setCurrentPage('cart');
    } else {
      setCurrentPage('home');
    }
  };

  // 장바구니에 추가
  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
    );

    if (existingItemIndex > -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, item]);
    }
    
    alert('장바구니에 추가되었습니다!');
  };

  // 장바구니 수량 변경
  const updateCartQuantity = (itemId, selectedSize, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.selectedSize === selectedSize
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCartItems(updatedCart);
  };

  // 장바구니 아이템 삭제
  const removeFromCart = (itemId, selectedSize) => {
    setCartItems(cartItems.filter(
      (item) => !(item.id === itemId && item.selectedSize === selectedSize)
    ));
  };

  // 장바구니로 이동
  const goToCart = () => {
    setCurrentPage('cart');
  };

  // 결제 페이지로 이동
  const goToCheckout = () => {
    if (cartItems.length === 0) {
      alert('장바구니가 비어있습니다!');
      return;
    }
    setCurrentPage('checkout');
  };

  return (
    <div className="app-container">
      {/* 왼쪽 섹션 */}
      <div className="left-section flex-column">
        <div className="logo"></div>
        <h2>1000만 디저트의 혁신</h2>
        <div className="mini_banner"></div>
        <div className='app-buttons flex-row'>
          <p className="google-button flex-row">
            <i></i>
            앱다운로드
          </p>
          <p className="apple-button flex-row">
            <i></i>앱다운로드
          </p>
        </div>
      </div>

      {/* 오른쪽 스크롤 섹션 */}
      <div className="right-section">
        <Header 
          isLoggedIn={isLoggedIn}
          onLoginClick={() => setCurrentPage('login')}
          pageType={currentPage}
          selectedCake={selectedCake}
          onPageChange={setCurrentPage}
          onBack={handleBack}
        />

        {/* ============ 각 페이지별 조건부 렌더링 ============ */}
        
        {/* 홈 페이지 */}
        {currentPage === 'home' && (
          <HomePage onCakeClick={handleCakeClick} />
        )}

        {/* 시그니처 페이지 */}
        {currentPage === 'signature' && (
          <SignaturePage onCakeClick={handleCakeClick} />
        )}

        {/* 이벤트 페이지 */}
        {currentPage === 'event' && (
          <EventPage />
        )}

        {/* 포인트/마이 페이지 */}
        {currentPage === 'points' && (
          <PointsPage />
        )}

        {/* 알림 페이지 */}
        {currentPage === 'alarm' && (
          <AlarmPage />
        )}

        {/* 로그인 페이지 */}
        {currentPage === 'login' && (
          <LoginPage onLoginSuccess={() => {
            setIsLoggedIn(true);
            setCurrentPage('home');
          }} />
        )}

        {/* 상세 페이지 */}
        {currentPage === 'detail' && selectedCake && (
          <DetailPage
            cake={selectedCake}
            onBack={() => setCurrentPage('home')}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            onPriceChange={setTotalPrice}
          />
        )}

        {/* 장바구니 페이지 */}
        {currentPage === 'cart' && (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={updateCartQuantity}
            onRemoveItem={removeFromCart}
            onCheckout={goToCheckout}
          />
        )}

        {/* 결제 페이지 */}
        {currentPage === 'checkout' && (
          <CheckoutPage
            cartItems={cartItems}
            onBack={() => setCurrentPage('cart')}
          />
        )}

        {/* 하단 네비게이션 */}
        <BottomNav
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          totalPrice={totalPrice}
          onAddToCart={() => {
            if (currentPage === 'detail' && selectedCake) {
              const selectedSizeOption = [
                { size: '1호', serves: '2-4인', price: (selectedCake.price || 0) - 8000 },
                { size: '2호', serves: '4-6인', price: selectedCake.price || 0 },
                { size: '3호', serves: '6-8인', price: (selectedCake.price || 0) + 12000 }
              ].find(opt => opt.size === selectedSize);

              const cartItem = {
                id: selectedCake.id,
                name: selectedCake.name,
                brand: selectedCake.brand,
                image: selectedCake.image,
                selectedSize: selectedSize,
                serves: selectedSizeOption?.serves || '',
                price: selectedSizeOption?.price || 0,
                quantity: quantity,
                totalPrice: (selectedSizeOption?.price || 0) * quantity
              };
              
              addToCart(cartItem);
            }
          }}
          onGoToCart={goToCart}
        />
      </div>
    </div>
  );
}

export default App;