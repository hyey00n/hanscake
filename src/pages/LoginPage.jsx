import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import './LoginPage.css';

const LoginPage = ({ onLogin, onBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      onLogin();
    } else {
      alert('이메일과 비밀번호를 입력해주세요.');
    }
  };

  const handleSocialLogin = (provider) => {
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo */}
        <div className="login-logo flex-center"> </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>이메일</label>
            <div className="input-with-icon">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="이메일을 입력하세요"
              />
            </div>
          </div>

          <div className="form-group">
            <label>비밀번호</label>
            <div className="input-with-icon">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="비밀번호를 입력하세요"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="form-options">
            <button type="button" className="link-btn">
              비밀번호 찾기
            </button>
          </div>

          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>또는</span>
        </div>

        {/* Social Login */}
        <div className="social-login grid grid-3">
          <button
            type="button"
            className="social-btn kakao"
            onClick={() => handleSocialLogin('kakao')}
          >
          </button>
          <button
            type="button"
            className="social-btn naver"
            onClick={() => handleSocialLogin('naver')}
          >
          </button>
          <button
            type="button"
            className="social-btn google"
            onClick={() => handleSocialLogin('google')}
          >
          </button>
        </div>

        {/* Signup Link */}
        <div className="signup-link">
          <span>아직 회원이 아니신가요?</span>
          <button
            type="button"
            className="link-btn"
            onClick={() => setIsSignup(!isSignup)}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;