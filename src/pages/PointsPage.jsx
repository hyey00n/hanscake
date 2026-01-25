import React from 'react';
import { User, Heart, ShoppingBag, Settings, ChevronRight, Gift } from 'lucide-react';
import './PointsPage.css';

const PointsPage = ({ onBack }) => {
  const menuItems = [
    { icon: ShoppingBag, label: '주문 내역', page: 'orders' },
    { icon: Heart, label: '찜한 상품', page: 'wishlist' },
    { icon: Gift, label: '쿠폰함', page: 'coupons' },
    { icon: Settings, label: '설정', page: 'settings' }
  ];

  return (
    <div className="points-page">
      {/* User Profile */}
      <div className="user-profile">
        <div className="profile-avatar">
          <User size={40} />
        </div>
        <div className="profile-info">
          <h2>로그인이 필요합니다</h2>
          <p>로그인하고 다양한 혜택을 받아보세요</p>
        </div>
      </div>

      {/* Points Card */}
      <div className="points-card">
        <div className="points-item">
          <span className="points-label">적립금</span>
          <span className="points-value">0원</span>
        </div>
        <div className="points-divider"></div>
        <div className="points-item">
          <span className="points-label">쿠폰</span>
          <span className="points-value">0개</span>
        </div>
      </div>

      {/* Menu */}
      <div className="menu-section">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button key={index} className="menu-item">
              <div className="menu-icon">
                <Icon size={25} />
              </div>
              <span>{item.label}</span>
              <ChevronRight className="menu-arrow" size={24} />
            </button>
          );
        })}
      </div>


    </div>
  );
};

export default PointsPage;