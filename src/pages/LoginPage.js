// src/pages/LoginPage.js
import { useState } from 'react';
import eyeOff from '../assets/svg/eye_off.svg'; // 비밀번호 숨김 아이콘
import googleIcon from '../assets/svg/google.svg';
import naverIcon from '../assets/svg/naver.svg';
import kakaoIcon from '../assets/svg/kakao.svg';

function LoginPage({ onLogin, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  const handleLogin = () => {
    if (!email) {
      alert('이메일을 입력해주세요');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    
    // 로그인 처리
    alert('로그인 성공!');
    onLogin(); // App.js의 로그인 상태 변경
  };

  const handleSocialLogin = (type) => {
    alert(`${type} 로그인 준비중입니다`);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">
          안녕하세요<br />
          <span className="brand-name">한스케이크</span>입니다.
        </h1>

        <div className="login-form">
          <input
            type="email"
            placeholder="이메일 아이디 입력해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호 입력해 주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
            <button 
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img src={eyeOff} alt="비밀번호 보기" />
            </button>
          </div>

          <label className="auto-login">
            <input
              type="checkbox"
              checked={autoLogin}
              onChange={(e) => setAutoLogin(e.target.checked)}
            />
            <span>자동 로그인</span>
          </label>

          <button 
            className="btn-login"
            onClick={handleLogin}
          >
            로그인
          </button>

          <div className="login-links">
            <button>아이디/비밀번호찾기</button>
          </div>

          <button className="btn-signup">
            회원가입
          </button>

          <div className="social-login">
            <button 
              className="social-btn google"
              onClick={() => handleSocialLogin('구글')}
            >
              <img src={googleIcon} alt="구글" />
            </button>
            <button 
              className="social-btn naver"
              onClick={() => handleSocialLogin('네이버')}
            >
              <img src={naverIcon} alt="네이버" />
            </button>
            <button 
              className="social-btn kakao"
              onClick={() => handleSocialLogin('카카오톡')}
            >
              <img src={kakaoIcon} alt="카카오톡" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;