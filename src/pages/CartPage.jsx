import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import './CartPage.css';

const CartPage = ({ cartItems = [], onUpdateQuantity, onRemoveItem, onCheckout }) => {
  
  // 총 상품 금액
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // 배송비
  const deliveryFee = totalPrice >= 50000 ? 0 : 3000;
  
  // 최종 금액
  const finalPrice = totalPrice + deliveryFee;

  const handleQuantityChange = (item, type) => {
    const newQuantity = type === 'plus' ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity >= 1) {
      onUpdateQuantity(item.id, item.selectedSize, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <p>장바구니가 비어있습니다</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={`${item.id}-${item.selectedSize}`} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-info">
              <div className="item-brand">{item.brand}</div>
              <h3>{item.name}</h3>
              <p className="item-option">{item.selectedSize} ({item.serves})</p>
              <div className="item-controls">
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(item, 'minus')}>
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item, 'plus')}>
                    <Plus size={16} />
                  </button>
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => onRemoveItem(item.id, item.selectedSize)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="item-price">
              {(item.price * item.quantity).toLocaleString()}원
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>상품 금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>
        <div className="summary-row">
          <span>배송비</span>
          <span>{deliveryFee === 0 ? '무료' : deliveryFee.toLocaleString() + '원'}</span>
        </div>
        {totalPrice < 50000 && (
          <div className="delivery-notice">
            50,000원 이상 구매 시 무료배송
          </div>
        )}
        <div className="summary-row total">
          <span>총 금액</span>
          <span>{finalPrice.toLocaleString()}원</span>
        </div>
      </div>

      {/* 하단 여백 */}
      <div style={{ height: '80px' }}></div>
    </div>
  );
};

export default CartPage;