import React from 'react';
import { ChevronRight, Gift, Truck, Heart, Star } from 'lucide-react';
import './HomePage.css';
import { cakesData } from '../data/cakesData';
import { signatureCakesData, newProductsData, topViewCakesData } from '../data/cakesData';
import { data } from 'react-router-dom';


const HomePage = ({ onCakeClick, onPageChange, isLoggedIn }) => {





  const reviews = [
    {
      id: 1,
      user: '김x지',
      rating: 5,
      comment: '생일 케이크 주문했는데 너무 맛있고 예뻤어요!',
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=300&h=300&fit=crop',
      date: '2024.01.15'
    },
    {
      id: 2,
      user: '박x호',
      rating: 5,
      comment: '커스텀 케이크 제작 정말 만족스러웠습니다!',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop',
      date: '2024.01.12'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-overlay flex-column">
          <h1 className="hero-title">카페리와 함께하는<br />특별한 순간</h1>
          <p className="hero-subtitle">당신의 소중한 날을 더 달콤하게</p>
        </div>
        <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop" alt="메인 케이크" />
      </div>

        {/* brand */}
      <section className='brands'>
        <ul className="mb-12 flex-between">
          <h2>브랜드관</h2>
          <button className="more-btn" onClick={() => onPageChange('signature')}>
            더보기 <ChevronRight size={16} />
          </button>
        </ul>
          <ul >
            <li className='godiva'></li>
           <li className='knotted'></li>
            <li className='dessert39'></li>
            <li className='bake'></li>
            <li className='twosome'></li>
            <li className='breadco'></li>
            <li className='starbucks'></li>
            
            
          </ul>
      </section>


      {/* Sub Categories */}
      <section className="categories">
        <ul className="mb-12 flex-between">
          <h2>하나만 사도 무조건 무료배송</h2>
          <button className="more-btn" onClick={() => onPageChange('signature')}>
            더보기 <ChevronRight size={16} />
          </button>
        </ul>
        <div className="category-scroll">
          {signatureCakesData.map((category, index) => (
            <div key={index} className="category-item " onClick={category.onClick}>
              <div className="category-image flex-center" style={{ background: category.color }}>
                <img src={category.image} alt={category.title} />
              </div>
              <div>
                <h3 className="category-brand">{category.brand}</h3>
                <p className="category-title">{category.title}</p>
                <p className="category-expected">예상구매가</p>
                <div className='category-price-info flex-row' >
                  <span className="category-discount">57%</span>
                  <span className="category-sale">{category.sale.toLocaleString()}원</span>
                  <span className="category-price">{category.price.toLocaleString()}원</span>
                </div>
                <span className="category-badge">무료배송</span>
              </div>
              
            </div>
          ))}
        </div>
      </section>
      
      <section className="new-section">
        <div className="mb-12 flex-between">
          <h2>신상품</h2>
          <button className="more-btn" onClick={() => onPageChange('signature')}>
            더보기 <ChevronRight size={16} />
          </button>
        </div>
        <div className="cake-grid flex-column">
          {newProductsData.map((cake) => (
            <div 
              key={cake.id} className="cake-card flex-row" onClick={() => onCakeClick(cake)}>
              {cake.badge && <span className={`badge ${cake.badge}`}>
                {cake.badgeText || cake.badge}
                </span>}
              <div className="cake-image">
                <img src={cake.image} alt={cake.name} />
                <button className="wishlist-btn flex-center" onClick={(e) => e.stopPropagation()}>
                  <Heart size={20} />
                </button>
              </div>
              <div>
                <h3 className="category-brand">{cake.brand}</h3>
                <p className="category-title">{cake.title}</p>
                <p className="category-expected">예상구매가</p>
                <div className='category-price-info flex-row' >
                  <span className="category-discount">57%</span>
                  <span className="category-sale">{cake.sale.toLocaleString()}원</span>
                  <span className="category-price">{cake.price.toLocaleString()}원</span>
                </div>
                <span className="category-badge">무료배송</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='home-footer'>
        <p>경기 안양시 동안구 시민대로 401 대륭테크노타운 15차 B111호 (관양2동 224-5) 카페리 사업자등록번호 222-88-63183 | 통신판매업신고 제2213-대구동구-1139호 | 대표이사 정혜윤</p>
        <p>Copyright 2014© caperie. All Right Reserved</p>
      </section>
    </div>
  );
};

export default HomePage;