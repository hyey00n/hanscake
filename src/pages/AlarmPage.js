import React, { useState } from "react";
import closeBtn from "../assets/svg/close.svg";

const AlarmPage = ({ CloseBtn, onBack, maxWidth }) => {
  const [alarms, setAlarms] = useState([
    {
      id: 1,
      title: "심심히님 주문하신 아메리카노가 나왔씁니다.",
      time: "2023.05.30 15:30",
      image: closeBtn,
    },
    {
      id: 2,
      title: "심심히님 주문하신 카푸치노가 나왔씁니다.",
      time: "2025.05.30 15:30",
      image: closeBtn,
    },
  ]);

  const handleDelete = (id) => {
    setAlarms(alarms.filter((alarm) => alarm.id !== id));
  };

  return (
    <div >
      <div className="alarm-tabs">
        <button className="alarm-tab-btn active">전체</button>
        <button className="alarm-tab-btn">주문</button>
        <button className="alarm-tab-btn">프로모션</button>
        <button className="alarm-tab-btn">스탬프/쿠폰</button>
        <button className="alarm-tab-btn">선물</button>
      </div>

      {alarms.map((alarm) => (
        <div key={alarm.id} className="alarm-wrap">
          <div className="text">
            <h3 style={{fontSize :'18px' , paddingBottom : '4px' }}>{alarm.title}</h3>
            <p style={{fontSize :'14px' }} > {alarm.time}</p>
          </div>
          <button onClick={() => handleDelete(alarm.id)} className="close-icon">
            <img src={alarm.image} alt="닫기버튼"></img>
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlarmPage;
