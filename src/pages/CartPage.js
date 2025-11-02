// src/pages/CartPage.js
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; ← 삭제!
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

function CartPage({ onBack, onCheckout }) { // props 추가!
  // const navigate = useNavigate(); ← 삭제!
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      category: '초코멀기생크림',
      name: '초코멀기생크림',
      price: 3000,
      quantity: 1,
      image: '/path/to/image1.jpg',
      checked: true
    },
    {
      id: 2,
      category: '무화과생크림',
      name: '무화과생크림',
      price: 35000,
      quantity: 1,
      image: '/path/to/image2.jpg',
      checked: true
    }
  ]);

  const [selectAll, setSelectAll] = useState(true);
  const [selectedTab, setSelectedTab] = useState('선택해제');

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const toggleItemCheck = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setCartItems(cartItems.map(item => ({ ...item, checked: newSelectAll })));
  };

  const getTotalPrice = () => {
    return cartItems
      .filter(item => item.checked)
      .reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-page">
      <Header title="장바구니" onBack={onBack} />
      
      <div className="store-info">
        <h2>압구정 스마일점</h2>
        <span className="distance">321m</span>
        <button className="change-store-btn">변경</button>
      </div>

      <div className="cart-tabs">
        <button 
          className={selectedTab === '선택해제' ? 'active' : ''}
          onClick={() => setSelectedTab('선택해제')}
        >
          선택해제
        </button>
        <button 
          className={selectedTab === '선택삭제' ? 'active' : ''}
          onClick={() => setSelectedTab('선택삭제')}
        >
          선택삭제
        </button>
      </div>

      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={item.id}>
            {(index === 0 || cartItems[index - 1].category !== item.category) && (
              <div className="category-header">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItemCheck(item.id)}
                />
                <span>{item.category}</span>
              </div>
            )}

            <div className="cart-item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItemCheck(item.id)}
              />
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-price">{item.price.toLocaleString()}원</p>
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <button 
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="checkout-btn"
        onClick={onCheckout} // navigate 대신 onCheckout 사용!
      >
        {getTotalPrice().toLocaleString()}원 주문하기
      </button>

      <BottomNav />
    </div>
  );
}

export default CartPage;