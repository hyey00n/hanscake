import React, { useState, useEffect } from "react";
import { signatureCakesData } from "../data/cakesData";
import StoreBottomSheet from "../components/StoreBottomSheet";

import leftArrow from "../assets/svg/left_arrow.svg";
import mainClose from "../assets/svg/main_close.svg";
import shoppingBag from "../assets/svg/shopping_bag.svg";

const SignaturePage = ({ onCakeClick, onBack }) => {
  const [isStoreSheetOpen, setIsStoreSheetOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  // 페이지 로드되자마자 바텀시트 열기
  useEffect(() => {
    setIsStoreSheetOpen(true);
  }, []);

  // 매장 선택 시
  const handleStoreSelect = (store) => {
    console.log("선택된 매장:", store);
    setSelectedStore(store);
    setIsStoreSheetOpen(false); // 바텀시트만 닫기
  };

  // 케이크 클릭 시 DetailPage로 이동
  const handleCakeClick = (cake) => {
    if (onCakeClick) {
      onCakeClick(cake);
    }
  };

  return (
    <div className="page-content">
      <div className="detail-header">
        {/* 선택된 매장 표시 */}
        {selectedStore && (
          <div
            style={{
              margin: "0 16px",
              padding: "12px 16px",
              marginBottom: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ebebebff",
              borderRadius: "8px",
            }}
          >
            <div>
              <p style={{ fontSize: "16px", color: "#000000ff" }}>픽업 매장</p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#000000ff",
                }}
              >
                {" "}
                {selectedStore.name}
              </p>
            </div>
            <button
              onClick={() => setIsStoreSheetOpen(true)}
              style={{
                padding: "6px 12px",
                fontSize: "14px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              변경
            </button>
          </div>
        )}

        <div className="menu-button-wrap">
          <button>케이크</button>
          <button>파운드/롤</button>
          <button>드링크</button>
          <button>주문케익</button>
        </div>

        <div className="tabs">
          <button className="tab-btn">프리미엄</button>
          <button className="tab-btn active">시그니처</button>
          <button className="tab-btn">클래식</button>
        </div>
      </div>

      <div className="cake-grid">
        {signatureCakesData.map((cake) => (
          <div
            key={cake.id}
            onClick={() => handleCakeClick(cake)}
            className="cake-card"
            style={
              {
                // border: "1px solid blue",
              }
            }
          >
            <div className="cake-card-image">
              <img src={cake.image} alt={cake.name} />
            </div>
            <div className="cake-card-content">
              <p className="cake-name mb-2">{cake.name}</p>
              <div className="flex">
                <p className="cake-discount mb-2">{cake.price}원</p>
                <p className="cake-price mb-2">
                  {cake.price.toLocaleString()}원
                </p>
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

      {/* 매장 선택 바텀시트 */}
      <StoreBottomSheet
        isOpen={isStoreSheetOpen}
        onClose={() => setIsStoreSheetOpen(false)}
        onStoreSelect={handleStoreSelect}
      />
    </div>
  );
};

export default SignaturePage;
