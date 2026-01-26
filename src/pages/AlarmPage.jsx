import React from 'react';
import { Bell, Package, Gift } from 'lucide-react';
import './AlarmPage.css';

const AlarmPage = ({ onCakeClick, onPageChange, isLoggedIn }) => {
  const notifications = [
    {
      id: 1,
      type: 'order',
      icon: Package,
      title: '주문이 배송 중입니다',
      message: '딸기 생크림 케이크가 배송 중입니다.',
      time: '10분 전',
      isNew: true
    },
    {
      id: 2,
      type: 'event',
      icon: Gift,
      title: '새로운 이벤트',
      message: '신규 회원 가입 이벤트가 시작되었습니다!',
      time: '1시간 전',
      isNew: true
    },
    {
      id: 3,
      type: 'notification',
      icon: Bell,
      title: '리뷰 작성 알림',
      message: '구매하신 상품의 후기를 작성해주세요.',
      time: '2시간 전',
      isNew: false
    }
  ];

  return (
    <div className="alarm-page">

      {!isLoggedIn ? (
        <div className="empty-state">
          <Bell size={48} color="#FF6B6B" />
          <h3>로그인이 필요합니다</h3>
          <p>알림을 받으려면 로그인해주세요</p>
          <button onClick={() => onPageChange('login')}>로그인</button>
        </div>
      ) : (
        <div className="notification-list">
          {notifications.map((noti) => {
            const Icon = noti.icon;
            return (
              <div key={noti.id} className={`notification-item ${noti.isNew ? 'new' : ''}`}>
                <div className="notification-icon">
                  <Icon size={24} />
                </div>
                <div className="notification-content">
                  <h3>{noti.title}</h3>
                  <p>{noti.message}</p>
                  <span className="notification-time">{noti.time}</span>
                </div>
                {noti.isNew && <div className="new-badge"></div>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AlarmPage;