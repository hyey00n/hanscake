// 이미지 import
import grapeImg from '../assets/images/coffee.png';
import figImg from '../assets/images/cake(2).png';
import cherryImg from '../assets/images/cake(3).png';
import strawberryImg from '../assets/images/cake(4).png';
import melonImg from '../assets/images/cake(5).png';
import cakeImg_6 from '../assets/images/cake(6).png';
import cakeImg_7 from '../assets/images/cake(7).png';
import cakeImg_8 from '../assets/images/cake(8).png';
import cakeImg_9 from '../assets/images/cake(9).png';
import cakeImg_10 from '../assets/images/cake(10).png';
import cakeImg_11 from '../assets/images/cake(11).png';
import cakeImg_12 from '../assets/images/cake(12).png';
import cakeImg_13 from '../assets/images/cake(13).png';
import cakeImg_14 from '../assets/images/cake(14).png';
import cakeImg_15 from '../assets/images/cake(15).png';
import cakeImg_16 from '../assets/images/cake(16).png';
import cakeImg_17 from '../assets/images/cake(17).png';


//아이콘 import
import gold from '../assets/svg/gold.svg';
import silver from '../assets/svg/silver.svg';
import bronze from '../assets/svg/bronze.svg';

const subtitle = '고정 가이들 이용해 포장되지만, 배송중에 약간의 흔들림이 발생할수 있습니다.';

export const cakesData = [
  { id: 1, name: '초코파운드 치즈타르트', subtitle: subtitle, price: 69000, image: figImg, rankType: 'image', rank: gold, color: '#f59e0b' },
  { id: 2, name: '딸기 체리 치즈타르트', subtitle: subtitle, price: 69000, image: cherryImg, rankType: 'image', rank: silver, color: '#d1d5db' },
  { id: 3, name: '딸기 치즈타르트', subtitle: subtitle, price: 69000, image: strawberryImg, rankType: 'image', rank: bronze, color: '#fb923c' },
  { id: 4, name: '청포도 생크림',subtitle: subtitle,  price: 69000, image: melonImg, rank: 4, color: '#6C6C6C' },
  { id: 5, name: '망고 생크림', subtitle: subtitle, price: 69000, image: cakeImg_6, rank: 5, color: '#6C6C6C' },
];

export const signatureCakesData = [
  { id: 6, name: '뽀띠 청포도 치즈타르트', subtitle: subtitle, price: 69000, image: cakeImg_17, color: '#D9D9D9' },
  { id: 7, name: '무화과생크림', subtitle: subtitle, price: 69000, image: cakeImg_16, color: '#D9D9D9' },
  { id: 8, name: '뽀띠 체리베리 치즈타르트', subtitle: subtitle, price: 69000, image: cakeImg_15, color: '#D9D9D9' },
  { id: 9, name: '뽀띠 딸기 치즈타르트', subtitle: subtitle, price: 69000, image: cakeImg_14, color: '#D9D9D9' },
  { id: 10, name: '멜론 생크림', subtitle: subtitle , price: 69000, image: cakeImg_13, color: '#D9D9D9' },
  { id: 11, name: '청포도 생크림', subtitle: subtitle, price: 69000, image: cakeImg_12, color: '#D9D9D9' },
  { id: 12, name: '망고 생크림', subtitle: subtitle, price: 69000, image: cakeImg_11, color: '#D9D9D9' },
  { id: 13, name: '화이트 스트로베리 프레지에', subtitle: subtitle, price: 69000, image: cakeImg_10, color: '#D9D9D9' },
];

export const pointHistoryData = [
  { date: '2023.04.05', time: '21:55', amount: 50000000, type: 'deposit', desc: '입금' },
  { date: '2023.04.05', time: '21:55', amount: -300, type: 'use', desc: '사용' },
  { date: '2023.04.05', time: '21:55', amount: -50, type: 'gift', desc: '홍길동님에게 선물 보냄' },
  { date: '2023.04.05', time: '21:55', amount: 4995, type: 'reward', desc: '김철수님에게 선물 받음', note: '0.1% 얼죽아포에게 자금되었습니다' },
];