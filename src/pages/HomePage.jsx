import React from 'react';
import { ChevronRight, Gift, Truck, Heart, Star } from 'lucide-react';
import './HomePage.css';
import { useEffect } from 'react';
import { cakesData } from '../data/cakesData';
import { signatureCakesData, newProductsData, topViewCakesData } from '../data/cakesData';
import { data } from 'react-router-dom';


const HomePage = ({ onCakeClick, onPageChange, isLoggedIn }) => {

useEffect(() => {
  const scrollContainers = document.querySelectorAll('.brand-list, .category-scroll');
  
  scrollContainers.forEach(container => {
    let isDown = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let lastX = 0;
    let animationFrame;
    let hasMoved = false; // 드래그 여부 체크 추가
    
    // 매우 약한 관성 스크롤
    const momentumScroll = () => {
      if (Math.abs(velocity) > 0.1) {
        const newScrollLeft = container.scrollLeft + velocity;
        
        // 스크롤 범위 체크
        if (newScrollLeft >= 0 && newScrollLeft <= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = newScrollLeft;
        } else {
          velocity = 0;
        }
        
        velocity *= 0.7;
        animationFrame = requestAnimationFrame(momentumScroll);
      }
    };
    
    // 마우스 다운
    const handleMouseDown = (e) => {
      isDown = true;
      hasMoved = false; // 드래그 여부 초기화
      container.style.cursor = 'grabbing';
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      lastX = e.pageX;
      velocity = 0;
      
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
    
    // 마우스 떠남
    const handleMouseLeave = () => {
      if (isDown) {
        isDown = false;
        container.style.cursor = 'grab';
        
        velocity = Math.max(-8, Math.min(8, velocity));
        momentumScroll();
      }
    };
    
    // 마우스 업
    const handleMouseUp = () => {
      if (isDown) {
        isDown = false;
        container.style.cursor = 'grab';
        
        velocity = Math.max(-8, Math.min(8, velocity));
        momentumScroll();
      }
    };
    
    // 마우스 무브
    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.0;
      const newScrollLeft = scrollLeft - walk;
      
      // 5px 이상 움직이면 드래그로 간주
      if (Math.abs(walk) > 5) {
        hasMoved = true;
      }
      
      // 스크롤 범위 체크
      if (newScrollLeft >= 0 && newScrollLeft <= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = newScrollLeft;
      }
      
      velocity = (e.pageX - lastX) * 0.4;
      lastX = e.pageX;
    };
    
    // 클릭 이벤트 막기 (드래그 후)
    const handleClick = (e) => {
      if (hasMoved) {
        e.preventDefault();
        e.stopPropagation();
        hasMoved = false; // 리셋
      }
    };
    
    // 마우스 휠
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY || e.deltaX;
      
      container.scrollBy({
        left: delta,
        behavior: 'auto'
      });
    };
    
    // 이벤트 리스너 등록
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick, true); // capture 단계에서 막기
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    // 클린업용 함수 저장
    container._handlers = {
      handleMouseDown,
      handleMouseLeave,
      handleMouseUp,
      handleMouseMove,
      handleClick,
      handleWheel
    };
  });
  
  return () => {
    scrollContainers.forEach(container => {
      if (container._handlers) {
        const { handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove, handleClick, handleWheel } = container._handlers;
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('click', handleClick, true);
        container.removeEventListener('wheel', handleWheel);
      }
    });
  };
}, []);


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
        
        <ul className="brand-list">
          <li className='godiva'></li>
          <li className='knotted'></li>
          <li className='dessert39'></li>
          <li className='bake'></li>
          <li className='twosome'></li>
          <li className='breadco'></li>
          <li className='starbucks'></li>
          <li className='godiva'></li>
          <li className='knotted'></li>
          <li className='dessert39'></li>
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
        <ul className="category-scroll">
          {signatureCakesData.map((category, index) => (
            <div key={index} className="category-item" onClick={()=> onCakeClick(category)}>
              <div className="category-image flex-center" style={{ background: category.color }}>
                <img src={category.image} alt={category.title} />
              </div>
              <div>
                <h3 className="category-brand">{category.brand}</h3>
                <p className="category-title">{category.title}</p>
                <p className="category-expected">예상구매가</p>
                <div className='category-price-info flex-row'>
                  <span className="category-discount">57%</span>
                  <span className="category-sale">{category.sale.toLocaleString()}원</span>
                  <span className="category-price">{category.price.toLocaleString()}원</span>
                </div>
                <span className="category-badge">무료배송</span>
              </div>
            </div>
          ))}
        </ul>
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
                <div className='category-price-info flex-row'>
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