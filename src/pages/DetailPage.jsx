import React, { useState, useEffect } from 'react';
import { Heart, Share2, Star, Minus, Plus } from 'lucide-react';
import './DetailPage.css';
import { getRelatedCakes } from '../data/cakesData';

const DetailPage = ({ 
  cake, 
  onBack, 
  quantity, 
  setQuantity, 
  selectedSize, 
  setSelectedSize,
  onPriceChange, 
  onAddToCart, 
  onGoToCart 
}) => {
  const [activeTab, setActiveTab] = useState('info');

  const relatedCakes = getRelatedCakes(cake?.relatedProducts || []);

  // 사이즈별 가격
  const sizeOptions = [
    { 
      size: '1호', 
      serves: '2-4인',
      diameter: '15cm',
      price: (cake?.price || 0) - 8000
    },
    { 
      size: '2호', 
      serves: '4-6인',
      diameter: '18cm',
      price: cake?.price || 0
    },
    { 
      size: '3호', 
      serves: '6-8인',
      diameter: '21cm',
      price: (cake?.price || 0) + 12000
    }
  ];

  const reviews = [
    {
      id: 1,
      user: '김민지',
      rating: 5,
      comment: '생일 파티용으로 주문했는데 손님들 모두 맛있다고 칭찬했어요!',
      date: '2024.01.15',
      images: []
    },
    {
      id: 2,
      user: '박준호',
      rating: 5,
      comment: '신선하고 예뻐요. 포장도 꼼꼼하게 잘 되어 있었습니다.',
      date: '2024.01.12',
      images: []
    }
  ];

  const handleQuantityChange = (type) => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'plus') {
      setQuantity(quantity + 1);
    }
  };

  const selectedSizeOption = sizeOptions.find(opt => opt.size === selectedSize);
  const selectedPrice = selectedSizeOption?.price || 0;
  const totalPrice = selectedPrice * quantity;

  useEffect(() => {
    if (onPriceChange) {
      onPriceChange(totalPrice);
    }
  }, [totalPrice, onPriceChange]);

  return (
    <div className="detail-page">
      {/* Product Images */}
      <div className="product-images">
        <div className="main-image">
          <img src={cake?.image} alt={cake?.name} />
          <div className="image-actions">
            <button className="action-btn">
              <Heart size={22} />
            </button>
            <button className="action-btn">
              <Share2 size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-header">
          <div className="product-meta">
            <span className="product-brand">{cake?.brand}</span>
            <div className="product-rating">
              <Star size={16} fill="#FFD700" color="#FFD700" />
              <span>{cake?.rating}</span>
              <span className="review-count">({cake?.reviewCount})</span>
            </div>
          </div>
          <h1 className="product-title">{cake?.name}</h1>
          <p className="product-description">{cake?.description}</p>
        </div>

        {/* Size Options */}
        <div className="option-section">
          <h3 className="option-title">사이즈 선택</h3>
          <div className="size-options">
            {sizeOptions.map((option) => (
              <button
                key={option.size}
                className={`size-option ${selectedSize === option.size ? 'active' : ''}`}
                onClick={() => setSelectedSize(option.size)}
              >
                <div className="size-info">
                  <span className="size-label">{option.size}</span>
                  <span className="size-serves">{option.serves}</span>
                </div>
                <span className="size-price">{option.price.toLocaleString()}원</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="quantity-section">
          <h3 className="option-title">수량</h3>
          <div className="quantity-control">
            <button onClick={() => handleQuantityChange('minus')} disabled={quantity <= 1}>
              <Minus size={18} />
            </button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange('plus')}>
              <Plus size={18} />
            </button>
          </div>
        </div>

        {/* Total Price Display */}
        <div className="total-price-section">
          <div className="total-label">총 금액</div>
          <div className="total-amount">{totalPrice.toLocaleString()}원</div>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'info' ? 'active' : ''}`}
            onClick={() => setActiveTab('info')}
          >
            상품정보
          </button>
          <button
            className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            후기 ({cake?.reviewCount})
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'info' && (
            <div className="info-content">
              <div className="info-item">
                <h4>제품 특징</h4>
                <ul>
                  {cake?.features?.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="info-item">
                <h4>보관 방법</h4>
                <p>{cake?.storage}</p>
              </div>
              <div className="info-item">
                <h4>배송 안내</h4>
                <p>{cake?.delivery}</p>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-content">
              <div className="review-summary">
                <div className="rating-overview">
                  <div className="rating-score">{cake?.rating}</div>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                    ))}
                  </div>
                  <div className="rating-count">{cake?.reviewCount}개의 후기</div>
                </div>
              </div>

              <div className="review-list">
                {reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div>
                        <span className="review-user">{review.user}</span>
                        <div className="review-stars">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="#FFD700" color="#FFD700" />
                          ))}
                        </div>
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                    <p className="review-text">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="related-section">
          <h3>이런 케이크는 어떠세요?</h3>
          <div className="related-grid">
            {relatedCakes.map((item) => (
              <div key={item.id} className="related-item">
                <div className="related-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <h4>{item.name}</h4>
                <p>{item.price.toLocaleString()}원</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 여백 (BottomNav 공간 확보) */}
      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default DetailPage;