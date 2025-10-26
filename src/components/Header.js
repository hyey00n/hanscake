import React from "react";
import search from "../assets/svg/search.svg";
import shopping from "../assets/svg/shopping_bag.svg";

import leftArrow from "../assets/svg/left_arrow.svg";
import mainClose from "../assets/svg/main_close.svg";

const Header = ({
  isLoggedIn,
  onLoginClick,
  pageType = "home",
  selectedCake,
  onBack,
}) => {
  const renderHeaderContent = () => {
    switch (pageType) {
      case "home":
        return (
          <>
            <div className="header-search-bar">
              <input type="text" placeholder="매장을 검색해주세요" />
              <button className="search-icon">
                <img src={search} alt="찾기" />
              </button>
            </div>
            <div className="header-actions">
              {!isLoggedIn ? (
                <>
                  <button onClick={onLoginClick} className="header-btn">
                    로그인
                  </button>
                  <button className="header-btn">회원가입</button>
                </>
              ) : (
                <img src={shopping} alt="장바구니" />
              )}
            </div>
          </>
        );

      case "event":
        return (
          <>
            <button onClick={onBack}>
              <img src={leftArrow} alt="뒤로가기"></img>
            </button>
            <div className="header-title">
              <h2>이벤트</h2>
            </div>
            <button onClick={onBack}>
              <img src={mainClose} alt="닫기"></img>
            </button>
          </>
        );

      case "alarm":
        return (
          <>
            <button onClick={onBack} className="back-btn">
              <img src={leftArrow} alt="뒤로가기"></img>
            </button>
            <div className="header-title">
              <h2>알림</h2>
            </div>
            <button onClick={onBack}>
              <img src={mainClose} alt="닫기"></img>
            </button>
          </>
        );

      case "signature":
        return (
          <>
            <button onClick={onBack} className="back-btn">
              <img src={leftArrow} alt="뒤로가기"></img>
            </button>
            <div className="header-title">
              <h2>시그니처 케이크</h2>
            </div>
            <button onClick={onBack}>
              <img src={mainClose} alt="닫기"></img>
            </button>
          </>
        );

      case "detail":
        return (
          <>
            <button onClick={onBack} className="back-btn">
              <img src={leftArrow} alt="뒤로가기"></img>
            </button>
            <div className="header-title">
              <h2>{selectedCake?.name || "상세정보"}</h2>
            </div>
            <div className="header-actions">
              {isLoggedIn && <img src={shopping} alt="장바구니" />}
            </div>
          </>
        );

      case "points":
        return (
          <>
            <button onClick={onBack} className="back-btn">
              <img src={leftArrow} alt="뒤로가기"></img>
            </button>
            <div className="header-title">
              <h2>포인트</h2>
            </div>
            <button onClick={onBack}>
              <img src={mainClose} alt="닫기"></img>
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`header header-${pageType}`}>{renderHeaderContent()}</div>
  );
};

export default Header;
