// src/pages/CheckoutPage.js
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; ← 삭제!
import Header from '../components/Header';

function CheckoutPage({ onBack }) { // props 추가!
  // const navigate = useNavigate(); ← 삭제!
  
  const [orderItems] = useState([
    {
      id: 1,
      name: '초코멀기생크림',
      quantity: 1,
      price: 3000,
      image: '/path/to/image1.jpg'
    }
  ]);

  const [orderRequest, setOrderRequest] = useState('');
  const [selectedRequest, setSelectedRequest] = useState('');
  const [reward, setReward] = useState('스탬프 쿠폰');
  const [mobaileReward, setMobaileReward] = useState('모바일 쿠폰');
  const [paymentMethod, setPaymentMethod] = useState('신용카드');

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const stampDiscount = 0;
  const couponDiscount = 0;
  const totalPrice = subtotal - stampDiscount - couponDiscount;

  const handleOrder = () => {
    alert('주문이 완료되었습니다!');
    // navigate('/'); ← 삭제!
    onBack(); // 홈으로 돌아가려면 App.js에서 처리
  };

  return (
    <div className="checkout-page">
      <Header title="결제하기" onBack={onBack} />

      <section className="order-info">
        <h2>주문정보</h2>
        {orderItems.map(item => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.quantity}개 {item.price.toLocaleString()}원</p>
            </div>
          </div>
        ))}
      </section>

      <section className="order-request">
        <h2>요청사항</h2>
        <select 
          value={selectedRequest}
          onChange={(e) => setSelectedRequest(e.target.value)}
        >
          <option value="">요청사항을 입력주세요</option>
          <option value="빨리">빨리 주세요</option>
          <option value="천천히">천천히 주세요</option>
        </select>
        <div className="request-notice">
          <input type="checkbox" id="allergyCheck" />
          <label htmlFor="allergyCheck">
            알레르기 (밀대, 스틱, 포크, 나이프미)이 필요하신면 선택해주세요.
          </label>
        </div>
      </section>

      <section className="rewards">
        <h2>리워드/쿠폰</h2>
        <select 
          value={reward}
          onChange={(e) => setReward(e.target.value)}
        >
          <option value="스탬프 쿠폰">스탬프 쿠폰</option>
          <option value="적립금">적립금</option>
        </select>
        <select 
          value={mobaileReward}
          onChange={(e) => setMobaileReward(e.target.value)}
        >
          <option value="모바일 쿠폰">모바일 쿠폰</option>
        </select>
      </section>

      <section className="payment-method">
        <h2>결제방법</h2>
        <div className="payment-options">
          <label>
            <input 
              type="radio" 
              name="payment" 
              value="신용카드"
              checked={paymentMethod === '신용카드'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            신용카드
          </label>
          <label>
            <input 
              type="radio" 
              name="payment" 
              value="간편카드 결제"
              checked={paymentMethod === '간편카드 결제'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            간편카드 결제
          </label>
          <label>
            <input 
              type="radio" 
              name="payment" 
              value="네이버페이"
              checked={paymentMethod === '네이버페이'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            네이버페이
          </label>
          <label>
            <input 
              type="radio" 
              name="payment" 
              value="카카오페이"
              checked={paymentMethod === '카카오페이'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            카카오페이
          </label>
          <label>
            <input 
              type="radio" 
              name="payment" 
              value="페이코"
              checked={paymentMethod === '페이코'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            페이코
          </label>
        </div>
      </section>

      <section className="payment-summary">
        <h2>결제금액</h2>
        <div className="summary-row">
          <span>주문금액</span>
          <span>{subtotal.toLocaleString()}원</span>
        </div>
        <div className="summary-row">
          <span>스탬프 쿠폰 사용</span>
          <span>{stampDiscount.toLocaleString()}원</span>
        </div>
        <div className="summary-row">
          <span>쿠폰사용</span>
          <span>{couponDiscount.toLocaleString()}원</span>
        </div>
        <div className="summary-total">
          <span>최종 결제 금액</span>
          <span>{totalPrice.toLocaleString()}원</span>
        </div>
      </section>

      <button 
        className="order-btn"
        onClick={handleOrder}
      >
        {totalPrice.toLocaleString()}원 주문하기
      </button>
    </div>
  );
}

export default CheckoutPage;