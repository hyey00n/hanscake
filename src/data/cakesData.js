// 이미지 import
import grapeImg from '../assets/images/coffee.png';
import figImg from '../assets/images/cake(2).png';
import cherryImg from '../assets/images/cake(3).png';
import strawberryImg from '../assets/images/cake(4).png';
import melonImg from '../assets/images/cake(5).png';
import mangoImg from '../assets/images/cake(6).png';
import cakeImg from '../assets/images/cake(7).png';


//아이콘 import
import gold from '../assets/svg/gold.svg';
import silver from '../assets/svg/silver.svg';
import bronze from '../assets/svg/bronze.svg';

export const cakesData = [
  { id: 1, name: '초코파운드 치즈타르트', price: 69000, image: cakeImg, rankType: 'image', rank: gold, color: '#f59e0b' },
  { id: 2, name: '딸기 체리베리 치즈타르트', price: 69000, image: strawberryImg, rankType: 'image', rank: silver, color: '#d1d5db' },
  { id: 3, name: '딸기 치즈타르트', price: 69000, image: strawberryImg, rankType: 'image', rank: bronze, color: '#fb923c' },
  { id: 4, name: '청포도 생크림', price: 69000, image: grapeImg, rank: 4, color: '#e5e7eb' },
  { id: 5, name: '망고 생크림', price: 69000, image: mangoImg, rank: 5, color: '#e5e7eb' },
];

export const signatureCakesData = [
  { id: 6, name: '뽀띠 청포도 치즈타르트', subtitle: '말스터치 씨이버거 세트', price: 69000, image: grapeImg, color: '#dcfce7' },
  { id: 7, name: '무화과생크림', subtitle: '말스터치 씨이버거 세트', price: 69000, image: figImg, color: '#ffedd5' },
  { id: 8, name: '뽀띠 체리베리 치즈타르트', subtitle: '말스터치 씨이버거 세트', price: 69000, image: cherryImg, color: '#fee2e2' },
  { id: 9, name: '뽀띠 딸기 치즈타르트', subtitle: '말스터치 씨이버거 세트', price: 69000, image: strawberryImg, color: '#fecaca' },
  { id: 10, name: '멜론 생크림', subtitle: '말스터치 씨이버거 세트', price: 69000, image: melonImg, color: '#f0fdf4' },
  { id: 11, name: '청포도 생크림', subtitle: '말스터치 씨이버거 세트', price: 69000, image: grapeImg, color: '#dcfce7' },
  { id: 12, name: '망고 생크림', subtitle: '말스터치 씨이버거 세트', price: 69000, image: mangoImg, color: '#fef9c3' },
  { id: 13, name: '화이트 스트로베리 프레지에', subtitle: '말스터치 씨이버거 세트', price: 69000, image: strawberryImg, color: '#fce7f3' },
];

export const pointHistoryData = [
  { date: '2023.04.05', time: '21:55', amount: 50000000, type: 'deposit', desc: '입금' },
  { date: '2023.04.05', time: '21:55', amount: -300, type: 'use', desc: '사용' },
  { date: '2023.04.05', time: '21:55', amount: -50, type: 'gift', desc: '홍길동님에게 선물 보냄' },
  { date: '2023.04.05', time: '21:55', amount: 4995, type: 'reward', desc: '김철수님에게 선물 받음', note: '0.1% 얼죽아포에게 자금되었습니다' },
];