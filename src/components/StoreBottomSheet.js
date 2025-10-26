import React, { useState } from "react";
import hansImg1 from "../assets/images/hans1.jpg";
import hansImg2 from "../assets/images/hans2.jpg";
import hansImg3 from "../assets/images/hans3.jpg";
import hansImg4 from "../assets/images/hans4.jpg";
import hansImg5 from "../assets/images/hans5.jpg";

const StoreBottomSheet = ({ isOpen, onClose, onStoreSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("nearby");

  const stores = [
    {
      id: 1,
      name: "압구정 스마일점",
      image: hansImg1,
      hours: "06:00~00:00",
      distance: "321m",
    },
    {
      id: 2,
      name: "한스 선릉점",
      image: hansImg2,
      hours: "06:00~00:00",
      distance: "321m",
    },
    {
      id: 3,
      name: "한스케익 대치점",
      image: hansImg3,
      hours: "06:00~00:00",
      distance: "321m",
    },
    {
      id: 4,
      name: "한스케이크 공덕점",
      image: hansImg4,
      hours: "06:00~00:00",
      distance: "321m",
    },
    {
      id: 5,
      name: "한스케익 강동점",
      image: hansImg5,
      hours: "06:00~00:00",
      distance: "321m",
    },
  ];

  const handleStoreClick = (store) => {
    // 매장 선택 시 바텀시트 닫기
    if (onStoreSelect) {
      onStoreSelect(store);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="bottom-sheet-overlay" onClick={onClose} />}

      {/* Bottom Sheet */}
      <div
        className={`bottom-sheet ${isOpen ? "open" : ""}`}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        {/* Header */}
        <div className="bottom-sheet-header">
          <div className="header-top">
            <h2>매장선택</h2>
            <button className="close-btn" onClick={onClose}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="매장을 검색해주세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <path
                  d="M21 21l-4.35-4.35"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "nearby" ? "active" : ""}`}
              onClick={() => setActiveTab("nearby")}
            >
              가까운 매장
            </button>
            <button
              className={`tab ${activeTab === "favorites" ? "active" : ""}`}
              onClick={() => setActiveTab("favorites")}
            >
              찜한 매장
            </button>
          </div>
        </div>

        {/* Store List */}
        <div className="store-list">
          {stores.map((store) => (
            <div
              key={store.id}
              className="store-item"
              onClick={() => handleStoreClick(store)}
            >
              <div className="store-image">
                <img src={store.image} alt={store.name} />
              </div>

              <div className="store-info">
                <h3>{store.name}</h3>
                <p className="store-hours">{store.hours}</p>
                <p className="store-distance">{store.distance}</p>
              </div>

              <button
                className="favorite-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("찜하기:", store.name);
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreBottomSheet;
