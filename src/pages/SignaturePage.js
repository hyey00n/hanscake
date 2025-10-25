import React, { useState } from 'react';
import { signatureCakesData } from '../data/cakesData';
import StoreBottomSheet from '../components/StoreBottomSheet';

const SignaturePage = ({ onCakeClick, onBack }) => {
  const [isStoreSheetOpen, setIsStoreSheetOpen] = useState(false);
  const [selectedCake, setSelectedCake] = useState(null);

  const handleCakeClick = (cake) => {
    setSelectedCake(cake);
    setIsStoreSheetOpen(true);
  };

  const handleStoreSelect = (store) => {
    console.log('선택된 케이크:', selectedCake);
    console.log('선택된 매장:', store);
    // 여기서 주문 프로세스 진행 또는 DetailPage로 이동
    if (onCakeClick) {
      onCakeClick(selectedCake);
    }
    setIsStoreSheetOpen(false);
  };

  return (
    <div className="page-content">
      <div className="detail-header">
        <div className="detail-header-content">
          <button onClick={onBack} style={{ padding: '8px', fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}>‹</button>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold', flex: 1, textAlign: 'center' }}>시그니처</h1>
          <button onClick={onBack} style={{ padding: '8px', fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
        </div>
        
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
            style={{ padding: '12px', cursor: 'pointer' }}
          >
            <div style={{ 
              width: '96px', 
              height: '96px', 
              backgroundColor: cake.color, 
              borderRadius: '8px', 
              marginRight: '16px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontSize: '40px',
              overflow: 'hidden'
            }}>
              <img src={cake.image} alt={cake.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc2626', marginBottom: '4px' }}>{cake.name}</p>
              <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>{cake.subtitle}</p>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{cake.price.toLocaleString()}원</p>
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