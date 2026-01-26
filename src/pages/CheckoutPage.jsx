import React, { useState } from 'react';
import { Check, ChevronRight, CreditCard, Smartphone } from 'lucide-react';
import './CheckoutPage.css';

const CheckoutPage = ({ cartItems = [], onBack }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    phone: '',
    address: '',
    addressDetail: '',
    message: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [agreedAll, setAgreedAll] = useState(false);
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    refund: false
  });

  // 총 상품 금액
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // 배송비
  const deliveryFee = totalPrice >= 50000 ? 0 : 3000;
  
  // 최종 금액
  const finalPrice = totalPrice + deliveryFee;

  const handleAgreementChange = (key) => {
    setAgreements(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleAgreeAll = () => {
    const newValue = !agreedAll;
    setAgreedAll(newValue);
    setAgreements({
      terms: newValue,
      privacy: newValue,
      refund: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreements.terms || !agreements.privacy || !agreements.refund) {
      alert('필수 약관에 모두 동의해주세요.');
      return;
    }
    
    alert(`주문이 완료되었습니다!\n총 ${finalPrice.toLocaleString()}원`);
  };

  return (
    <div className="checkout-page">
      <form onSubmit={handleSubmit}>
        {/* Order Items */}
        <section className="checkout-section">
          <h2 className="section-title">주문 상품</h2>
          <div className="order-items">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="order-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <div className="item-brand">{item.brand}</div>
                  <h3>{item.name}</h3>
                  <p className="item-option">{item.selectedSize} ({item.serves})</p>
                  <p className="item-quantity">수량: {item.quantity}개</p>
                </div>
                <div className="item-price">
                  {(item.price * item.quantity).toLocaleString()}원
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Info */}
        <section className="checkout-section">
          <h2 className="section-title">배송 정보</h2>
          <div className="form-group">
            <label>이름 *</label>
            <input
              type="text"
              value={deliveryInfo.name}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, name: e.target.value})}
              placeholder="받는 분 이름"
              required
            />
          </div>
          <div className="form-group">
            <label>연락처 *</label>
            <input
              type="tel"
              value={deliveryInfo.phone}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})}
              placeholder="010-0000-0000"
              required
            />
          </div>
          <div className="form-group">
            <label>주소 *</label>
            <div className="address-input">
              <input
                type="text"
                value={deliveryInfo.address}
                onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})}
                placeholder="주소 검색"
                required
              />
              <button type="button" className="address-search-btn">주소 검색</button>
            </div>
            <input
              type="text"
              value={deliveryInfo.addressDetail}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, addressDetail: e.target.value})}
              placeholder="상세 주소"
              className="address-detail"
            />
          </div>
          <div className="form-group">
            <label>배송 메시지</label>
            <textarea
              value={deliveryInfo.message}
              onChange={(e) => setDeliveryInfo({...deliveryInfo, message: e.target.value})}
              placeholder="배송 시 요청사항을 입력해주세요"
              rows="3"
            />
          </div>
        </section>

        {/* Payment Method */}
        <section className="checkout-section">
          <h2 className="section-title">결제 수단</h2>
          <div className="payment-methods">
            <button
              type="button"
              className={`payment-method ${paymentMethod === 'card' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('card')}
            >
              <CreditCard size={24} />
              <span>신용/체크카드</span>
          
            </button>
            <button
              type="button"
              className={`payment-method ${paymentMethod === 'kakao' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('kakao')}
            >
              <div className="kakao-icon">K</div>
              <span>카카오페이</span>
             
            </button>
            <button
              type="button"
              className={`payment-method ${paymentMethod === 'toss' ? 'active' : ''}`}
              onClick={() => setPaymentMethod('toss')}
            >
              <Smartphone size={24} />
              <span>토스페이</span>
             
            </button>
          </div>
        </section>

        {/* Price Summary */}
        <section className="checkout-section">
          <h2 className="section-title">결제 금액</h2>
          <div className="price-summary">
            <div className="price-row">
              <span>상품 금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
            <div className="price-row">
              <span>배송비</span>
              <span>{deliveryFee === 0 ? '무료' : deliveryFee.toLocaleString() + '원'}</span>
            </div>
            <div className="price-row total">
              <span>총 결제 금액</span>
              <span className="total-price">{finalPrice.toLocaleString()}원</span>
            </div>
          </div>
        </section>

        {/* Agreements */}
        <section className="checkout-section">
          <div className="agreement-all">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreedAll}
                onChange={handleAgreeAll}
              />
              <span className="checkbox-custom"></span>
              <span className="agreement-text">전체 동의</span>
            </label>
          </div>
          <div className="agreements">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreements.terms}
                onChange={() => handleAgreementChange('terms')}
              />
              <span className="checkbox-custom"></span>
              <span className="agreement-text">
                구매 조건 및 이용약관 동의 (필수)
                <button type="button" className="agreement-detail">
                  <ChevronRight size={16} />
                </button>
              </span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreements.privacy}
                onChange={() => handleAgreementChange('privacy')}
              />
              <span className="checkbox-custom"></span>
              <span className="agreement-text">
                개인정보 수집 및 이용 동의 (필수)
                <button type="button" className="agreement-detail">
                  <ChevronRight size={16} />
                </button>
              </span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreements.refund}
                onChange={() => handleAgreementChange('refund')}
              />
              <span className="checkbox-custom"></span>
              <span className="agreement-text">
                취소/환불 정책 동의 (필수)
                <button type="button" className="agreement-detail">
                  <ChevronRight size={16} />
                </button>
              </span>
            </label>
          </div>
        </section>

        {/* 하단 여백 */}
        <div style={{ height: '80px' }}></div>
      </form>
    </div>
  );
};

export default CheckoutPage;