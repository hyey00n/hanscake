import React from "react";
import UserInfoSection from "../components/UserInfoSection";
import { cakesData } from "../data/cakesData";
import banner from "../assets/images/banner.png";

const HomePage = ({ onCakeClick, onPageChange, isLoggedIn }) => (
  <div className="page-content">
    <div className="anniversary-banner">
      <img src={banner}></img>
    </div>

    <UserInfoSection isLoggedIn={isLoggedIn} />

    <div className="cake-section">
      <div className="section-header">
        <h3 className="section-title">한스케이크 TOP 10</h3>
        <button className="more-btn">
          더보기 <span>›</span>
        </button>
      </div>
      <p style={{ fontSize: "16px", marginBottom: "34px" }}>
        빠르게 픽업할수 있는 상품이에요.
      </p>

      {cakesData.map((cake) => (
        <div
          key={cake.id}
          onClick={() => onCakeClick(cake)}
          className="cake-item"
        >
          <div className="cake-rank" style={{ backgroundColor: cake.color }}>
            {cake.rankType === "image" ? (
              <img src={cake.rank} alt="랭크"></img>
            ) : (
              <span className="rank-text">{cake.rank} </span>
            )}
          </div>
          <div className="cake-image">
            <img
              src={cake.image}
              alt={cake.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="cake-info">
            <p className="cake-category">초코파운드케익</p>
            <p className="cake-name">{cake.name}</p>
            <p className="cake-price">{cake.price.toLocaleString()}원</p>
          </div>
        </div>
      ))}
    </div>

    <div className="coupon-event"></div>

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
            <img
              src={cake.image}
              alt={cake.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="cake-card-content">
            <p className="cake-category">초코파운드케익</p>
            <p className="cake-name mb-2">{cake.name}</p>
            <p className="cake-price">{cake.price.toLocaleString()}원</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default HomePage;
