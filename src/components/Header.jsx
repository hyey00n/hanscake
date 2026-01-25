import React from 'react';
import { ArrowLeft, Search, ShoppingCart, User, Bell } from 'lucide-react';
import './Header.css';

const Header = ({ isLoggedIn, onLoginClick, pageType, selectedCake, onPageChange, onBack }) => {
  const getPageTitle = () => {
    switch(pageType) {
      case 'home':
        return null; // 홈에서는 로고만 표시
      case 'detail':
        return '상품 상세';
      case 'cart':
        return '장바구니';
      case 'checkout':
        return '주문/결제';
      case 'login':
        return '로그인';
      case 'signature':
        return '시그니처';
      case 'event':
        return '이벤트';
      case 'alarm':
        return '알림';
      case 'points':
        return '포인트';
      default:
        return '';
    }
  };

  const showBackButton = pageType !== 'home';
  const showLogo = pageType === 'home';
  const pageTitle = getPageTitle();

  return (
    <header className="header">
      {pageType === 'home' && (
        <div className="sub-header">
          <div className="welcome-message">
            {isLoggedIn ? (
              <span>반가워요! 오늘도 달콤한 하루 되세요 🍰</span>
            ) : (
              <span onClick={() => onPageChange('login')} className="login-prompt flex-between ">
                앱에서 더 많은 상품을 볼 수 있어요! 
                <button>앱에서 보기</button>
              </span>
            )}
          </div>
        </div>
      )}
      <div className="header-content">
        {/* Left Section */}
        <div className="header-left">
          {showBackButton ? (
            <button className="header-btn" onClick={onBack}>
              <ArrowLeft size={24} />
            </button>
          ) : (
            <div className="header-spacer"></div>
          )}
        </div>

        {/* Center Section */}
        <div className="header-center">
          {showLogo ? (
            <h1 className="header-logo" onClick={() => onPageChange('home')}>
            </h1>
          ) : (
            <h2 className="header-title">{pageTitle}</h2>
          )}
        </div>

        {/* Right Section */}
        <div className="header-right">
          {pageType === 'home' && (
            <>
              <button className="header-btn" onClick={() => onPageChange('alarm')}>
                <Bell size={22} />
              </button>
              <button className="header-btn" onClick={() => onPageChange('cart')}>
                <ShoppingCart size={22} />
              </button>
            </>
          )}
          {pageType !== 'home' && pageType !== 'login' && pageType !== 'checkout' && (
            <>
              <button className="header-btn">
                <Search size={22} />
              </button>
              <button className="header-btn" onClick={() => onPageChange('cart')}>
                <ShoppingCart size={22} />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;