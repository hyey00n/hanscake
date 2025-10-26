import React, { useState } from 'react';
import { cakesData } from '../data/cakesData';

import caution from "../assets/svg/caution.svg";

const DetailPage = ({ cake, onBack, maxWidth, quantity, setQuantity }) => {
  // 함께 구매하면 좋은 메뉴 (현재 케이크 제외하고 2개)
  const recommendedCakes = cakesData
    .filter(c => c.id !== cake.id)
    .slice(0, 2);

  return (
    <div style={{ paddingBottom: '200px' }}>
      <div className="detail-image">
        <div style={{ fontSize: '120px' }}>
          <img src={cake.image} alt={cake.name}  />
        </div>
      </div>

      <div className="detail-info">
        <h2 className="detail-name">{cake.name}</h2>
        <p className="detail-description">
          부드럽고 특특 쉽이는 식감에 온온한 단맛과 풍미를 가진 무화과와 진하면서도 깔끔한 끼리 크림치즈가 어우러진 타르트
        </p>
        <p className="detail-price">{cake.price.toLocaleString()}원</p>
        <div className='detail-caution'>
          <img src={caution} alt='주의정보'></img>
          <p>제품영양 정보 | 원산지 정보</p>
        </div>
      </div>

      {/* 함께 구매하면 좋은 메뉴 */}
      
      <div className='recommendedCakes'>
        <h3>
          함께구매하면 좋은 메뉴
        </h3>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto' }}>
          {recommendedCakes.map((recommendedCake) => (
            <div
              key={recommendedCake.id}
              style={{
                minWidth: '120px',
                backgroundColor: '#D9D9D9',
                padding: '8px',
                cursor: 'pointer'
              }}
            >
              <div style={{
                height: '120px',
              }}>
                <img
                  src={recommendedCake.image}
                  alt={recommendedCake.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;