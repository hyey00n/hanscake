import React from 'react';
import stamp from "../assets/svg/stamp.svg";
import coupon from "../assets/svg/coupon.svg";
import gift from "../assets/svg/gift.svg";

const UserInfoSection = ({ isLoggedIn }) => {
  if (!isLoggedIn) return null;

  return (
    <>
      <div className="user-welcome">
        <p className="welcome-text">우리잇님 반갑습니다</p>
        <div className="gold-card">
          <div className="gold-header">
            <div className='gold-title'>
            <span style={{ fontWeight: 'bold' }}>Gold</span>
            <span style={{ fontSize: '14px' }}>최종 목표 달성을 축하드려요</span>
            </div>

            <span style={{ fontWeight: 'bold' }}>Gold</span>
          </div>
          <div className="gold-progress-bg">
            <div className="gold-progress-bar"></div>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-icon">
            <img src={stamp} alt='스탬프'></img>
          </span>
          <p className="stat-label">스탬프</p>
          <p className="stat-value">0/10</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">
            <img src={coupon} alt='쿠폰'></img>
          </span>
          <p className="stat-label">쿠폰</p>
          <p className="stat-value">11</p>
        </div>
        <div className="stat-item">
          <span className="stat-icon">
            <img src={gift} alt='스탬프'></img>
          </span>
          <p className="stat-label">주문내역</p>
          <p className="stat-value">20</p>
        </div>
      </div>
    </>
  );
};

export default UserInfoSection;