import React from "react";
import { pointHistoryData } from "../data/cakesData";

import leftArrow from "../assets/svg/left_arrow.svg";
import mainClose from "../assets/svg/main_close.svg";

const PointsPage = ({ onBack }) => (
  <div className="page-content">

    <div className="points-card">
      <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>
        한스케이크 TOP 10
      </h3>
      <p style={{ fontSize: "16px", color: "#6b7280", marginBottom: "16px" }}>
        빠르게 픽업할수 있는 상품이에요.
      </p>

      <div className="stamp-grid">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`stamp-item ${i === 0 ? "active" : ""}`}>
            <p className={`stamp-text ${i === 0 ? "active" : ""}`}> HANS</p>
          </div>
        ))}
      </div>
    </div>
    <div
      className="dummyLine"
      style={{ width: "100%", height: "8px", backgroundColor: "#E7E9EB" }}
    ></div>
  </div>
);

export default PointsPage;
