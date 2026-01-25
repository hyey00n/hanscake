import React from 'react';
import { Star, Heart } from 'lucide-react';
import './HomePage.css';
import { signatureCakesData } from '../data/cakesData';

const SignaturePage = ({ onCakeClick, onBack }) => {

  return (
    <div className="signature-page">
      <div className="cake-grid grid-2 grid">
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
    </div>
  );
};

export default SignaturePage;