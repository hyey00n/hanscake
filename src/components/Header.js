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
  onPageChange, // 추가!
}) => {
  const renderHeaderContent = () => {
    switch (pageType) {
      case "home":
        return (
          < >
            <h3 >
              안녕하세요 로그인해주세요.
            </h3>
            <div className="header-actions">
              {!isLoggedIn ? (
                <>
                  <button onClick={() => onPageChange('login')}>
                    로그인
                  </button>
                
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
            <button onClick={onBack} className="back-btn">
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
              <h2>메뉴</h2>
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
              <h2>마이페이지</h2>
            </div>
            <button onClick={onBack}>
              <img src={mainClose} alt="닫기"></img>
            </button>
          </>
        );

      case "login": // 로그인 페이지 헤더 추가!
        return (
          <>
            <button onClick={onBack} className="back-btn">
              <img src={leftArrow} alt="뒤로가기"></img>
            </button>
            <div className="header-title">
              <h2>로그인</h2>
            </div>
            <button onClick={onBack}>
              <img src={mainClose} alt="닫기"></img>
            </button>
          </>
        );

      case "cart": // 장바구니 페이지 헤더 추가!
        return (
          <>
            <button onClick={onBack} className="back-btn">
              <img src={leftArrow} alt="뒤로가기"></img>
            </button>
            <div className="header-title">
              <h2>장바구니</h2>
            </div>
            <button onClick={onBack}>
              <img src={mainClose} alt="닫기"></img>
            </button>
          </>
        );

      case "checkout": // 결제 페이지 헤더 추가!
        return (
          <>
            <button onClick={onBack} className="back-btn">
              <img src={leftArrow} alt="뒤로가기"></img>
            </button>
            <div className="header-title">
              <h2>결제하기</h2>
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