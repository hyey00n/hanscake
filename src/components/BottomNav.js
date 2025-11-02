import React from "react";
// import { useNavigate } from 'react-router-dom'; ← 이 줄 삭제!
import homeOn from "../assets/svg/home_on.svg";
import homeOff from "../assets/svg/home_off.svg";
import alarmOn from "../assets/svg/alarm_on.svg";
import alarmOff from "../assets/svg/alarm_off.svg";
import orderOn from "../assets/svg/order_on.svg";
import orderOff from "../assets/svg/order_off.svg";
import mypageOn from "../assets/svg/mypage_on.svg";
import mypageOff from "../assets/svg/mypage_off.svg";
import eventOn from "../assets/svg/event_on.svg";
import eventOff from "../assets/svg/event_off.svg";
import shopping from "../assets/svg/shopping_bag.svg";
import down from "../assets/svg/down.svg";
import upAdd from "../assets/svg/up.svg";


const BottomNav = ({ 
  currentPage, 
  onPageChange, 
  maxWidth, 
  selectedCake, 
  quantity, 
  setQuantity 
}) => {
  // const navigate = useNavigate(); ← 이 줄 삭제!
  
  // 디테일 페이지일 때 액션 버튼 표시
  if (currentPage === "detail" && selectedCake) {
    return (
      <div className="action-buttons">
        <div className="quantity-control">
          <div className="quantity-content" style={{ maxWidth }}>
            <div className="quantity-selector">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
              >
                <img src={down} alt='빼기'></img>
              </button>
              <span className="quantity-value">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              >
                <img src={upAdd} alt='더하기'></img>
              </button>
            </div>
            <div className="total-price">
              <span className="total-amount">
                {(selectedCake.price * quantity).toLocaleString()}원
              </span>
            </div>
          </div>
        </div>
        <div className="action-buttons-content" style={{ maxWidth }}>
          <button 
            className="btn-cart"
            onClick={() => onPageChange('cart')}
          >
            <img src={shopping} alt="장바구니" />
            <p>장바구니</p>
          </button>
          <button 
            className="btn-order"
            onClick={() => onPageChange('checkout')}
          >
            주문하기
          </button>
        </div>
      </div>
    );
  }

  // 일반 네비게이션
  return (
    <div className="bottom-nav">
      <div className="bottom-nav-content" style={{ maxWidth }}>
        <button
          onClick={() => onPageChange("alarm")}
          className={`nav-item ${currentPage === "alarm" ? "active" : ""}`}
        >
          <span className="nav-icon">
            <img src={currentPage === "alarm" ? alarmOn : alarmOff} alt="알림" />
          </span>
          <span className="nav-label">알림</span>
        </button>

        <button
          onClick={() => onPageChange("signature")}
          className={`nav-item ${currentPage === "signature" ? "active" : ""}`}
        >
          <span className="nav-icon">
            <img src={currentPage === "signature" ? orderOn : orderOff} alt="주문" />
          </span>
          <span className="nav-label">주문</span>
        </button>

        <button
          onClick={() => onPageChange("home")}
          className={`nav-item ${currentPage === "home" ? "active" : ""}`}
        >
          <span className="nav-icon">
            <img src={currentPage === "home" ? homeOn : homeOff} alt="홈" />
          </span>
          <span className="nav-label">홈</span>
        </button>

        <button
          onClick={() => onPageChange("event")}
          className={`nav-item ${currentPage === "event" ? "active" : ""}`}
        >
          <span className="nav-icon">
            <img src={currentPage === "event" ? eventOn : eventOff} alt="이벤트" />
          </span>
          <span className="nav-label">이벤트</span>
        </button>

        <button
          onClick={() => onPageChange("points")}
          className={`nav-item ${currentPage === "points" ? "active" : ""}`}
        >
          <span className="nav-icon">
            <img src={currentPage === "points" ? mypageOn : mypageOff} alt="마이페이지" />
          </span>
          <span className="nav-label">마이페이지</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;