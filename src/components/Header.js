import React from 'react';

const Header = ({ isLoggedIn, onLoginClick }) => (
  <div className="header">
    <span className="header-time">8:00</span>
    <div className="header-actions">
      {!isLoggedIn ? (
        <>
          <button onClick={onLoginClick} className="header-btn">로그인</button>
          <button className="header-btn">회원가입</button>
        </>
      ) : (
        <span style={{ fontSize: '20px' }}>🛒</span>
      )}
    </div>
  </div>
);

export default Header;