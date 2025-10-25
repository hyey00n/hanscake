import React, { useState } from 'react';

const DetailPage = ({ cake, onBack, maxWidth }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ paddingBottom: '160px' }}>
      <div className="detail-header">
        <div className="detail-header-content">
          <button onClick={onBack} style={{ padding: '8px', fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}>‹</button>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>상세보기</h1>
          <button onClick={onBack} style={{ padding: '8px', fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
        </div>
      </div>

      <div className="detail-image">
        <div style={{ fontSize: '120px' }}>
          <img src={cake.image} alt={cake.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      <div className="detail-info">
        <h2 className="detail-name">{cake.name}</h2>
        <p className="detail-description">
          부드럽고 특특 쉽이는 식감에 온온한 단맛과 풍미를 가진 무화과와 진하면서도 깔끔한 끼리 크림치즈가 어우러진 타르트
        </p>
        <p className="detail-price">{cake.price.toLocaleString()}원</p>
      </div>

      <div style={{ padding: '0 24px', marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>함께구매하면 좋은 메뉴</h3>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto' }}>
          {[1, 2].map((i) => (
            <div key={i} style={{ minWidth: '160px', backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '8px' }}>
              <div style={{ height: '128px', backgroundColor: 'white', borderRadius: '8px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>
                {i === 1 ? '🥭' : '🍓'}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="quantity-control">
        <div className="quantity-content" style={{ maxWidth }}>
          <div className="quantity-selector">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="quantity-btn"
            >
              -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
          </div>
          <div className="total-price">
            <span className="total-amount">
              {(cake.price * quantity).toLocaleString()}원
            </span>
          </div>
        </div>
      </div>

      <div className="action-buttons">
        <div className="action-buttons-content" style={{ maxWidth }}>
          <button className="btn-cart">
            <span style={{ marginRight: '8px' }}>🛒</span>
            장바구니
          </button>
          <button className="btn-order">
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;