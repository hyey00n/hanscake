// 이미지 import (camelCase)
import strawberryTart from '../assets/images/strawberry-tart.png';
import strawberryShort from '../assets/images/strawberry-short.png';
import strawberryCream from '../assets/images/strawberry-cream.png';
import strawberryCheese from '../assets/images/strawberry-cheese.png';
import classicStrawberry from '../assets/images/classic-strawberry.png';
import roseCream from '../assets/images/rose-cream.png';
import plainCheese from '../assets/images/plain-cheese.png';
import grapeCream from '../assets/images/grape-cream.png';
import pinkBlossom from '../assets/images/pink-blossom.png';
import melonCake from '../assets/images/melon-cake.png';
import mangoShort from '../assets/images/mango-short.png';
import mangoCheese from '../assets/images/mango-cheese.png';
import grapeTart from '../assets/images/grape-tart.png';
import berryTart from '../assets/images/berry-tart.png';
import chocoLayer from '../assets/images/choco-layer.png';
import chocoTart from '../assets/images/choco-tart.png';
import chocoMousse from '../assets/images/choco-mousse.png';
import redvelvet from '../assets/images/redvelvet.png';
import cherryTart from '../assets/images/cherry-tart.png';
import caramelTart from '../assets/images/caramel-tart.png';
import potatoCake from '../assets/images/potato-cake.png';

// 1. 시그니처 케이크 (가장 예쁜 측면 케이크들)
export const signatureCakesData = [
  {  
    brand: '투썸플레이스',
    badge: 'best',
    badgeText: '베스트',
    id: 1,
    name: '딸기 생크림 케이크',
    title: '딸기 생크림 케이크',
    subtitle: '신선한 딸기가 가득한 부드러운 생크림 케이크',
    description: '국내산 신선한 딸기와 프리미엄 생크림이 어우러진 시그니처 케이크입니다. 특별한 날을 더욱 달콤하게 만들어드립니다.',
    category: '시그니처',
    rating: 4.9,
    reviewCount: 127,
    sale: 95000,
    price: 72000,
    image: strawberryCream,
    color: '#FFF5F7',
    features: [
      '국내산 신선한 딸기 사용',
      '프리미엄 생크림 100%',
      '당일 제조 신선 배송',
      '무료 메시지 카드 제공'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 24시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [2, 3, 6]
  },
  { 
    brand: '고디바',
    badge: 'best',
    badgeText: '베스트',
    id: 2,
    name: '레드벨벳 케이크',
    title: '레드벨벳 케이크',
    subtitle: '부드러운 크림치즈 프로스팅의 레드벨벳',
    description: '붉은 벨벳처럼 부드러운 시트와 진한 크림치즈 프로스팅이 조화를 이루는 프리미엄 케이크입니다.',
    category: '시그니처',
    rating: 4.8,
    reviewCount: 98,
    sale: 99000,
    price: 78000,
    image: redvelvet,
    color: '#FFF0F0',
    features: [
      '부드러운 레드벨벳 시트',
      '진한 크림치즈 프로스팅',
      '프리미엄 코코아 사용',
      '특별한 날을 위한 디저트'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [3, 9, 10]
  },
  { 
    brand: '고디바',
    badge: 'best',
    badgeText: '베스트',
    id: 3,
    name: '초콜릿 레이어 케이크',
    title: '초콜릿 레이어 케이크',
    subtitle: '진한 초콜릿 시트와 가나슈의 풍미',
    description: '벨기에산 프리미엄 초콜릿으로 만든 진한 초콜릿 레이어 케이크. 초콜릿 러버를 위한 최고의 선택입니다.',
    category: '시그니처',
    rating: 5.0,
    reviewCount: 145,
    sale: 98000,
    price: 79000,
    image: chocoLayer,
    color: '#F5F0EB',
    features: [
      '벨기에산 프리미엄 초콜릿',
      '진한 가나슈 크림',
      '3단 레이어 구성',
      '초콜릿 러버 강력 추천'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [2, 202, 206]
  },
  { 
    brand: '투썸플레이스',
    badge: null,
    badgeText: null,
    id: 4,
    name: '청포도 생크림',
    title: '청포도 생크림',
    subtitle: '싱그러운 청포도와 부드러운 생크림의 조화',
    description: '상큼한 청포도와 부드러운 생크림이 어우러진 청량감 가득한 케이크입니다.',
    category: '생크림',
    rating: 4.7,
    reviewCount: 82,
    sale: 88000,
    price: 69000,
    image: grapeCream,
    color: '#F0F8F0',
    features: [
      '샤인머스캣 청포도 사용',
      '가벼운 생크림',
      '상큼한 과일 풍미',
      '여름 시즌 인기 상품'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 24시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [5, 7, 201]
  },
  { 
    brand: '스타벅스',
    badge: null,
    badgeText: null,
    id: 5,
    name: '망고 쇼트케이크',
    title: '망고 쇼트케이크',
    subtitle: '달콤한 망고와 폭신한 시트의 만남',
    description: '태국산 프리미엄 망고와 폭신한 시트가 어우러진 트로피칼 케이크입니다.',
    category: '쇼트케이크',
    rating: 4.8,
    reviewCount: 76,
    sale: 96000,
    price: 76000,
    image: mangoShort,
    color: '#FFF8E7',
    features: [
      '태국산 프리미엄 망고',
      '폭신한 시트',
      '상큼달콤한 맛',
      '여름 한정 상품'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 24시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [4, 10, 103]
  },
  { 
    brand: '투썸플레이스',
    badge: null,
    badgeText: null,
    id: 6,
    name: '딸기 쇼트케이크',
    title: '딸기 쇼트케이크',
    subtitle: '클래식한 딸기 쇼트케이크의 정석',
    description: '신선한 딸기와 부드러운 생크림, 폭신한 시트의 완벽한 조화를 이루는 클래식 케이크입니다.',
    category: '쇼트케이크',
    rating: 4.9,
    reviewCount: 156,
    sale: 85000,
    price: 67000,
    image: strawberryShort,
    color: '#FFF5F7',
    features: [
      '국내산 신선한 딸기',
      '클래식한 레시피',
      '부드러운 생크림',
      '베스트셀러 상품'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 24시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [1, 9, 203]
  },
  { 
    brand: '노티드',
    badge: null,
    badgeText: null,
    id: 7,
    name: '핑크 블라썸 케이크',
    title: '핑크 블라썸 케이크',
    subtitle: '화사한 핑크빛 장미 크림이 가득한 케이크',
    description: '장미 모양의 핑크 크림이 화사하게 장식된 로맨틱한 케이크입니다.',
    category: '디자인',
    rating: 4.9,
    reviewCount: 92,
    sale: 108000,
    price: 89000,
    image: pinkBlossom,
    color: '#FFF0F5',
    features: [
      '핑크 로즈 크림 장식',
      '인스타그래머블',
      '특별한 날 추천',
      '포토제닉 디자인'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 24시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [101, 102, 1]
  },
  { 
    brand: '스타벅스',
    badge: null,
    badgeText: null,
    id: 8,
    name: '플레인 치즈케이크',
    title: '플레인 치즈케이크',
    subtitle: '부드럽고 고소한 뉴욕 스타일 치즈케이크',
    description: '진한 크림치즈와 부드러운 식감이 일품인 뉴욕 스타일 치즈케이크입니다.',
    category: '치즈케이크',
    rating: 4.8,
    reviewCount: 134,
    sale: 75000,
    price: 59000,
    image: plainCheese,
    color: '#FFF8E7',
    features: [
      '뉴욕 스타일 레시피',
      '진한 크림치즈',
      '부드러운 식감',
      '클래식한 맛'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 72시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [9, 10, 5]
  },
  { 
    brand: '베이크',
    badge: null,
    badgeText: null,
    id: 9,
    name: '딸기 치즈케이크',
    title: '딸기 치즈케이크',
    subtitle: '상큼한 딸기와 부드러운 치즈케이크',
    description: '신선한 딸기와 진한 치즈케이크의 완벽한 만남입니다.',
    category: '치즈케이크',
    rating: 4.9,
    reviewCount: 118,
    sale: 91000,
    price: 73000,
    image: strawberryCheese,
    color: '#FFF5F7',
    features: [
      '국내산 신선한 딸기',
      '진한 치즈케이크',
      '상큼달콤한 조화',
      '인기 메뉴'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [1, 6, 8]
  },
  { 
    brand: '베이크',
    badge: null,
    badgeText: null,
    id: 10,
    name: '망고 치즈케이크',
    title: '망고 치즈케이크',
    subtitle: '트로피칼 망고와 진한 치즈의 조합',
    description: '달콤한 망고와 고소한 치즈케이크가 어우러진 트로피칼 디저트입니다.',
    category: '치즈케이크',
    rating: 4.7,
    reviewCount: 89,
    sale: 102000,
    price: 82000,
    image: mangoCheese,
    color: '#FFF8E7',
    features: [
      '태국산 프리미엄 망고',
      '진한 치즈케이크',
      '트로피칼 풍미',
      '여름 시즌 추천'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [5, 8, 9]
  },
];

// 2. 신상품 (새로 나온 케이크들)
export const newProductsData = [
  {  
    brand: '디저트39',
    badge: 'new',
    badgeText: '신상품',
    id: 101,
    name: '로즈 크림 타르트',
    title: '로즈 크림 타르트',
    subtitle: '장미 모양 크림이 우아한 타르트',
    description: '장미꽃 모양의 크림이 우아하게 장식된 프리미엄 타르트입니다.',
    category: '타르트',
    rating: 4.8,
    reviewCount: 45,
    sale: 87000,
    price: 70000,
    image: roseCream,
    color: '#FFF0F5',
    features: [
      '장미 크림 장식',
      '바삭한 타르트',
      '우아한 디자인',
      '선물용 추천'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [7, 102, 105]
  },
  { 
    brand: '노티드',
    badge: 'new',
    badgeText: '신상품',
    id: 102,
    name: '믹스베리 타르트',
    title: '믹스베리 타르트',
    subtitle: '다양한 베리가 듬뿍 올라간 타르트',
    description: '신선한 블루베리, 라즈베리, 블랙베리가 가득한 타르트입니다.',
    category: '타르트',
    rating: 4.9,
    reviewCount: 67,
    sale: 86000,
    price: 69000,
    image: berryTart,
    color: '#F5F0EB',
    features: [
      '3가지 베리 사용',
      '상큼한 맛',
      '비타민 풍부',
      '건강한 디저트'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 24시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [101, 204, 203]
  },
  { 
    brand: '디저트39',
    badge: 'new',
    badgeText: '신상품',
    id: 103,
    name: '멜론 케이크',
    title: '멜론 케이크',
    subtitle: '향긋한 멜론이 올라간 특별한 케이크',
    description: '프리미엄 멜론을 듬뿍 올린 여름 시즌 한정 케이크입니다.',
    category: '시즌',
    rating: 4.7,
    reviewCount: 58,
    sale: 105000,
    price: 84000,
    image: melonCake,
    color: '#F0F8F0',
    features: [
      '프리미엄 멜론',
      '여름 한정 상품',
      '상큼한 풍미',
      '특별한 날 추천'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 24시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [4, 5, 10]
  },
  { 
    brand: '브레댄코',
    badge: 'new',
    badgeText: '신상품',
    id: 104,
    name: '고구마 케이크',
    title: '고구마 케이크',
    subtitle: '자연의 단맛이 살아있는 고구마 케이크',
    description: '국내산 고구마로 만든 건강한 단맛의 케이크입니다.',
    category: '건강',
    rating: 4.6,
    reviewCount: 42,
    sale: 69000,
    price: 55000,
    image: potatoCake,
    color: '#FFF8E7',
    features: [
      '국내산 고구마 100%',
      '자연의 단맛',
      '건강한 디저트',
      '저당 케이크'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [8, 205, 11]
  },
  { 
    brand: '디저트39',
    badge: 'new',
    badgeText: '신상품',
    id: 105,
    name: '클래식 딸기 타르트',
    title: '클래식 딸기 타르트',
    subtitle: '정통 프렌치 스타일의 딸기 타르트',
    description: '프랑스 전통 방식으로 만든 정통 딸기 타르트입니다.',
    category: '타르트',
    rating: 4.9,
    reviewCount: 73,
    sale: 94000,
    price: 75000,
    image: classicStrawberry,
    color: '#FFF5F7',
    features: [
      '프렌치 레시피',
      '바삭한 타르트',
      '신선한 딸기',
      '정통 방식'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [203, 1, 6]
  },
];

// 3. 탑뷰 케이크 (위에서 본 타르트 케이크들)
export const topViewCakesData = [
  {  
    brand: '투썸플레이스',
    badge: null,
    badgeText: null,
    id: 201,
    name: '청포도 타르트',
    title: '청포도 타르트',
    subtitle: '상큼한 청포도가 올라간 치즈 타르트',
    description: '싱싱한 청포도와 부드러운 치즈가 어우러진 타르트입니다.',
    category: '타르트',
    rating: 4.8,
    reviewCount: 95,
    sale: 89000,
    price: 68000,
    image: grapeTart,
    color: '#F0F8F0',
    features: [
      '신선한 청포도',
      '치즈 타르트',
      '상큼한 맛',
      '여름 추천'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [4, 203, 202]
  },
  { 
    brand: '고디바',
    badge: null,
    badgeText: null,
    id: 202,
    name: '초코칩 타르트',
    title: '초코칩 타르트',
    subtitle: '바삭한 타르트 위에 초콜릿칩이 가득',
    description: '고소한 타르트와 달콤한 초콜릿칩의 조화입니다.',
    category: '타르트',
    rating: 4.7,
    reviewCount: 78,
    sale: 79000,
    price: 62000,
    image: chocoTart,
    color: '#F5F5F0',
    features: [
      '프리미엄 초콜릿칩',
      '바삭한 타르트',
      '고소한 맛',
      '커피와 환상 궁합'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [3, 206, 205]
  },
  { 
    brand: '베이크',
    badge: null,
    badgeText: null,
    id: 203,
    name: '딸기 타르트',
    title: '딸기 타르트',
    subtitle: '달콤한 딸기가 듬뿍 올라간 프리미엄 타르트',
    description: '신선한 딸기를 아낌없이 올린 프리미엄 타르트입니다.',
    category: '타르트',
    rating: 4.9,
    reviewCount: 142,
    sale: 92000,
    price: 74000,
    image: strawberryTart,
    color: '#FFF5F7',
    features: [
      '국내산 프리미엄 딸기',
      '바삭한 타르트',
      '커스터드 크림',
      '베스트셀러'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [1, 6, 105]
  },
  { 
    brand: '베이크',
    badge: null,
    badgeText: null,
    id: 204,
    name: '체리 타르트',
    title: '체리 타르트',
    subtitle: '새콤달콤한 체리가 올라간 타르트',
    description: '새콤달콤한 체리와 부드러운 크림의 조화입니다.',
    category: '타르트',
    rating: 4.7,
    reviewCount: 86,
    sale: 93000,
    price: 75000,
    image: cherryTart,
    color: '#FFF5F7',
    features: [
      '신선한 체리',
      '새콤달콤',
      '바닐라 크림',
      '여름 한정'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [203, 102, 201]
  },
  { 
    brand: '브레댄코',
    badge: null,
    badgeText: null,
    id: 205,
    name: '캐러멜 타르트',
    title: '캐러멜 타르트',
    subtitle: '고소한 캐러멜이 올라간 견과류 타르트',
    description: '달콤한 캐러멜과 고소한 견과류의 풍미가 가득한 타르트입니다.',
    category: '타르트',
    rating: 4.6,
    reviewCount: 62,
    sale: 82000,
    price: 66000,
    image: caramelTart,
    color: '#FFF8E7',
    features: [
      '고급 견과류 사용',
      '수제 캐러멜',
      '고소한 풍미',
      '커피와 잘 어울림'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 72시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [202, 104, 8]
  },
  { 
    brand: '고디바',
    badge: null,
    badgeText: null,
    id: 206,
    name: '초콜릿 무스',
    title: '초콜릿 무스',
    subtitle: '벨벳처럼 부드러운 초콜릿 무스 케이크',
    description: '벨기에 초콜릿으로 만든 부드러운 무스 케이크입니다.',
    category: '무스',
    rating: 4.9,
    reviewCount: 108,
    sale: 97000,
    price: 78000,
    image: chocoMousse,
    color: '#FFF0F5',
    features: [
      '벨기에 초콜릿 100%',
      '부드러운 무스',
      '진한 풍미',
      '초콜릿 러버 추천'
    ],
    storage: '냉장 보관 (2-5°C), 수령 후 48시간 이내 섭취 권장',
    delivery: '평일 오후 2시 이전 주문 시 당일 배송 가능',
    relatedProducts: [2, 3, 202]
  },
];

// 모든 케이크 데이터 통합 (검색/필터용)
export const allCakesData = [
  ...signatureCakesData,
  ...newProductsData,
  ...topViewCakesData
];

// ID로 케이크 찾기 헬퍼 함수
export const getCakeById = (id) => {
  return allCakesData.find(cake => cake.id === id);
};

// 관련 상품 가져오기 헬퍼 함수
export const getRelatedCakes = (productIds) => {
  return productIds.map(id => getCakeById(id)).filter(Boolean);
};