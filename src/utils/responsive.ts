import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const responsive = {
  width,
  height,

  // 화면 크기 기준 계산
  wp: (percentage: number) => (width * percentage) / 100,
  hp: (percentage: number) => (height * percentage) / 100,

  // 디바이스 타입 감지
  isSmallDevice: width < 350,
  isMediumDevice: width >= 350 && width < 450,
  isLargeDevice: width >= 450,
};

// 사용 예시
// const buttonWidth = responsive.wp(80);  화면 너비의 80%
// const buttonHeight = responsive.hp(6);  화면 높이의 6%
