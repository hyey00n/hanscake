import React, { useState, useEffect } from 'react';
import { signatureCakesData } from '../data/cakesData';
import StoreBottomSheet from '../components/StoreBottomSheet';

import leftArrow from '../assets/svg/left_arrow.svg';
import mainClose from '../assets/svg/main_close.svg';

const SignaturePage = ({ onCakeClick, onBack }) => {
  const [isStoreSheetOpen, setIsStoreSheetOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  // 페이지 로드되자마자 바텀시트 열기
  useEffect(() => {
    setIsStoreSheetOpen(true);
  }, []);

  // 매장 선택 시
  const handleStoreSelect = (store) => {
    console.log('선택된 매장:', store);
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
        <div className="detail-header-content">
          <button onClick={onBack} >
              <img src={leftArrow} alt='뒤로가기'></img>
            </button>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold', flex: 1, textAlign: 'center' }}>시그니처</h1>
          <button onClick={onBack} >
              <img src={mainClose} alt='닫기'></img>

          </button>
        </div>
        
        {/* 선택된 매장 표시 */}
        {selectedStore && (
          <div style={{ 
            margin: '0 16px',
            padding: '12px 16px',
            marginBottom : '12px', 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border : '1px solid #ebebebff',
            borderRadius :'8px'
          }}>
            <div>
              <p style={{ fontSize: '16px', color: '#000000ff', }}>픽업 매장</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#000000ff' }}> {selectedStore.name}
              </p>
            </div>
            <button 
              onClick={() => setIsStoreSheetOpen(true)}
              style={{ 
                padding: '6px 12px', 
                fontSize: '14px', 
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              변경
            </button>
          </div>
        )}
        
        <div style={{ display: 'flex', gap: '8px', padding: '0 16px 12px', overflowX: 'auto' }}>
          <button style={{ padding: '8px 16px', borderRadius: '9999px', border: '1px solid #e5e7eb', whiteSpace: 'nowrap', background: 'white', cursor: 'pointer' }}>케이크</button>
          <button style={{ padding: '8px 16px', borderRadius: '9999px', border: '1px solid #e5e7eb', whiteSpace: 'nowrap', background: 'white', cursor: 'pointer' }}>파운드/롤</button>
          <button style={{ padding: '8px 16px', borderRadius: '9999px', border: '1px solid #e5e7eb', whiteSpace: 'nowrap', background: 'white', cursor: 'pointer' }}>드링크</button>
          <button style={{ padding: '8px 16px', borderRadius: '9999px', border: '1px solid #e5e7eb', whiteSpace: 'nowrap', background: 'white', cursor: 'pointer' }}>주문케익</button>
        </div>

        <div className="tabs">
          <button className="tab-btn">프리미엄</button>
          <button className="tab-btn active">시그니처</button>
          <button className="tab-btn">클래식</button>
        </div>
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {signatureCakesData.map((cake) => (
          <div 
            key={cake.id}
            onClick={() => handleCakeClick(cake)}
            className="cake-item"
            style={{  cursor: 'pointer' }}
          >
            <div style={{ 
              
              width: '100px', 
              height: '100px', 
              backgroundColor: cake.color, 
              marginRight: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '40px',
              overflow: 'hidden'
            }}>
              <img src={cake.image} alt={cake.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#FF552E', marginBottom: '4px' }}>{cake.name}</p>
              <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '8px' }}>{cake.subtitle}</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{cake.price.toLocaleString()}원</p>
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