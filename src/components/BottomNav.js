import React from "react";
import homeOn from "../assets/svg/home_on.svg";
import homeOff from "../assets/svg/home_off.svg";
import alarmOn from "../assets/svg/alarm_on.svg";
import alarmOff from "../assets/svg/alarm_off.svg";
import orderOn from "../assets/svg/order_on.svg";
import orderOff from "../assets/svg/order_off.svg";
import messageOn from "../assets/svg/message_on.svg";
import messageOff from "../assets/svg/message_off.svg";
import mypageOn from "../assets/svg/mypage_on.svg";
import mypageOff from "../assets/svg/mypage_off.svg";
import eventOn from "../assets/svg/event_on.svg";
import eventOff from "../assets/svg/event_off.svg";

const BottomNav = ({ currentPage, onPageChange, maxWidth }) => (
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
          <img
            src={currentPage === "event" ? eventOn : eventOff}
            alt="메세지"
          />
        </span>
        <span className="nav-label">이벤트</span>
      </button>
      <button
        onClick={() => onPageChange("points")}
        className={`nav-item ${currentPage === "points" ? "active" : ""}`}
      >
        <span className="nav-icon">
          <img
            src={currentPage === "points" ? mypageOn : mypageOff}
            alt="마이페이지"
          />
        </span>
        <span className="nav-label">마이페이지</span>
      </button>
    </div>
  </div>
);

export default BottomNav;
