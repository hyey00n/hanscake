import React from "react";
import UserInfoSection from "../components/UserInfoSection";
import { cakesData } from "../data/cakesData";
import banner from "../assets/images/banner.png";
import rightArrow from "../assets/svg/right_arrow.svg";
import mainCoupon from "../assets/svg/main_coupon.svg";
import mainStamp from "../assets/svg/main_stamp.svg";
import payment from "../assets/svg/payment.svg";
import shoppingBag from "../assets/svg/shopping_bag.svg";

const HomePage = ({ onCakeClick, onPageChange, isLoggedIn }) => (
  <div className="page-content">
    <div className="header_button">
      <button className="header_button_item">
        <img src={mainCoupon}></img>
        <span>coupon</span>
      </button>
      <button className="header_button_item">
        <img src={mainStamp}></img>
        <span>stamp</span>
      </button>
      <button className="header_button_item">
        <img src={payment}></img>
        <span>Easy payment</span>
      </button>
    </div>
    <div className="anniversary-banner">
      <img src={banner}></img>
    </div>

    <UserInfoSection isLoggedIn={isLoggedIn} />

    <div className="cake-section">
      <div className="section-header">
        <h3 className="section-title">한스케이크 TOP 10</h3>
        <button className="more-btn">
          더보기
          <img src={rightArrow} alt="화살표" style={{ width: "14px" }}></img>
        </button>
      </div>
      <p style={{ fontSize: "16px", marginBottom: "34px" , padding :'0 16px' }}>
        빠르게 픽업할수 있는 상품이에요.
      </p>
      <div className="cakeItem-warp">
        {cakesData.map((cake) => (
          <div
            key={cake.id}
            onClick={() => onCakeClick(cake)}
            className="cake-item"
          >
            <div className="cake-image">
              <img src={cake.image} alt={cake.name} />
            </div>
            <div>
              <p className="cake-name">{cake.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="tabs">
      <button className="tab-btn active">프리미엄</button>
      <button onClick={() => onPageChange("signature")} className="tab-btn">
        시그니처
      </button>
      <button className="tab-btn">클래식</button>
    </div>

    <div className="cake-grid">
      {cakesData.slice(0, 6).map((cake) => (
        <div
          key={cake.id}
          onClick={() => onCakeClick(cake)}
          className="cake-card"
        >
          <div className="cake-card-image">
            <img src={cake.image} alt={cake.name} />
          </div>
          <div className="cake-card-content">
            <p className="cake-name mb-2">{cake.name}</p>
            <div className="flex">
              <p className="cake-discount mb-2">{cake.price}원</p>
              <p className="cake-price mb-2">{cake.price.toLocaleString()}원</p>
            </div>
            <p className="explanation"> {cake.subtitle}</p>
            <div className="flex space-between">
              <div className="flex">
                <p className="sale">SALE</p>
                <p className="best">BEST</p>
              </div>

              {/* <p className="new">BEST</p> */}
              {/* <p className="limitend">LIMITED</p> */}
              <img src={shoppingBag} alt="장바구니"></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
