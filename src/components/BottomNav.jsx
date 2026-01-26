import React from 'react';
import './BottomNav.css';
import { ShoppingCart } from 'lucide-react';
import homeIcon from '../assets/svg/home_off.svg';
import homeActiveIcon from '../assets/svg/home_on.svg';
import myIcon from '../assets/svg/mypage_off.svg';
import myActiveIcon from '../assets/svg/mypage_on.svg';

const BottomNav = ({ currentPage, onNavigate, totalPrice = 0, onAddToCart, onGoToCart }) => {
  
  const showNavigation = ['home', 'signature', 'event', 'points'].includes(currentPage);
  const showDetailButtons = currentPage === 'detail';
  const showCartButton = currentPage === 'cart';
  const showCheckoutButton = currentPage === 'checkout';
  const hideAll = ['login', 'alarm'].includes(currentPage);
  
  if (hideAll) return null;

  return (
    <nav className="bottom-nav">
      
      {/* 일반 네비게이션 */}
      {showNavigation && (
        <div className="nav-buttons">
          <button 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => onNavigate('home')}
          >
            <img 
              src={currentPage === 'home' ? homeActiveIcon : homeIcon} 
              alt="홈" 
              className='icon' 
            />
            <span className="label">홈</span>
          </button>

          <button 
            className={currentPage === 'signature' ? 'active' : ''}
            onClick={() => onNavigate('signature')}
          >
            <img 
              src={currentPage === 'signature' ? myActiveIcon : myIcon} 
              alt="시그니처" 
              className='icon' 
            />
            <span className="label">시그니처</span>
          </button>

          <button 
            className={currentPage === 'event' ? 'active' : ''}
            onClick={() => onNavigate('event')}
          >
            <img 
              src={currentPage === 'event' ? myActiveIcon : myIcon} 
              alt="이벤트" 
              className='icon' 
            />
            <span className="label">이벤트</span>
          </button>

          <button 
            className={currentPage === 'points' ? 'active' : ''}
            onClick={() => onNavigate('points')}
          >
            <img 
              src={currentPage === 'points' ? myActiveIcon : myIcon} 
              alt="마이" 
              className='icon' 
            />
            <span className="label">마이</span>
          </button>
        </div>
      )}

{/* 상세페이지 버튼 */}
{showDetailButtons && (
  <div className="action-buttons-double">
    <div className="price-info">
      <div className="price-label">총 금액</div>
      <div className="price-value">{totalPrice.toLocaleString()}원</div>
    </div>
    <button 
      className="action-buttons-single"
      onClick={onAddToCart}
    >
      <ShoppingCart size={20} />
      <span>장바구니</span>
    </button>
    <button 
      className="buy-btn"
      onClick={() => {
        onAddToCart(); // 먼저 장바구니에 추가
        onGoToCart();  // 그 다음 장바구니 페이지로 이동
      }}
    >
      구매하기
    </button>
  </div>
)}

      {/* 장바구니 버튼 */}
      {showCartButton && (
        <div className="checkout-btn flex-center">
          <button onClick={() => onNavigate('checkout')}>
            주문하기
          </button>
        </div>
      )}

      {/* 결제 버튼 */}
      {showCheckoutButton && (
        <div className="checkout-btn flex-center">
          <button onClick={() => alert('결제 진행')}>
            결제하기
          </button>
        </div>
      )}
      
    </nav>
  );
};

export default BottomNav;