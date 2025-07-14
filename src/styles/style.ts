import { TextStyle } from 'react-native';

//실제 런타임 값
export const theme = {
  colors: {
    primary: '#E39898',
    background: '#FFF4F2',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C6C6C8',
    error: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
    } as TextStyle,
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
    } as TextStyle,
    h3: {
      fontSize: 18,
      fontWeight: '600',
      lineHeight: 24,
    } as TextStyle,
    body: {
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 24,
    } as TextStyle,
    caption: {
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: 16,
    } as TextStyle,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 999,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },
  },
} as const;

export type Theme = typeof theme;

//typeof는 theme의 타입들을 생성해줌 거기서 as const로 readonly로 만들어줌 이게 as const를 사용하지 않으면 타입을 그냥 string으로 읽음
