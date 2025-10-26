import React, { useState } from "react";
import eventBanner1 from "../assets/images/event_banner1.jpg";
import eventBanner2 from "../assets/images/event_banner2.jpg";
import eventBanner3 from "../assets/images/event_banner3.jpg";

import leftArrow from "../assets/svg/left_arrow.svg";
import mainClose from "../assets/svg/main_close.svg";

const EventPage = ({ onBack }) => {
  const events = [
    {
      id: 1,
      image: eventBanner1, // 이미지 경로
      title: "크리스마스 케잌 사전예약 [최대25% 할인]",
      startDate: "2025.02.20",
      endDate: "2025.03.03",
      status: "ongoing", // 'ongoing', 'scheduled', 'ended'
    },
    {
      id: 2,
      image: eventBanner2,
      title: "케이터링 디저트 서비스 [최대10% 할인]",
      startDate: "2025.02.20",
      endDate: "2025.03.03",
      status: "ongoing",
    },
    {
      id: 3,
      image: eventBanner3,
      title: "한스야 생일축하해 [아아 + 조각케이크 무료]",
      startDate: "2025.02.20",
      endDate: "2025.03.03",
      status: "ongoing",
    },
  ];

  return (
    <div className="page-content">
      <div className="detail-header">

        <div className="tabs">
          <button className="tab-btn">진행중</button>
          <button className="tab-btn active">진행예정</button>
          <button className="tab-btn">진행마감</button>
        </div>
      </div>

      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">
              {event.startDate} ~ {event.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
