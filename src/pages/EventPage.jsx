import React from 'react';
import './EventPage.css';

const EventPage = ({ onCakeClick, onPageChange, isLoggedIn }) => {
  const events = [
    {
      id: 1,
      title: '신규 회원 가입 이벤트',
      description: '첫 구매 시 10% 할인',
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=400&fit=crop',
      badge: 'upcoming',
      badgeText :'진행예정'
    },
    {
      id: 2,
      title: '생일 케이크 특가',
      description: '생일 케이크 최대 20% 할인',
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&h=400&fit=crop',
      badge: 'ongoing',
      badgeText :'진행중'
    },
    {
      id: 3,
      title: '리뷰 이벤트',
      description: '후기 작성 시 1,000원 적립',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=400&fit=crop',
      badge: 'closed',
      badgeText :'마감'
    }
  ];

  return (
    <div className="event-page">

      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            {event.badge && (
              <span className={`event-badge ${event.badge.toLowerCase()}`}>
                 {event.badgeText || event.badge}
                
              </span>
            )}
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;