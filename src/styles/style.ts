import { TextStyle } from 'react-native';

export const theme = {
  colors: {
    // 기본 색상
    primary: '#E39898',
    background: '#FFF4F2',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C6C6C8',
    warning: '#FF9500',
    profileColor: '#4D99FF',
    profileSecondary: '#FF99CC',

    // 상태 색상
    success: '#34C759',
    error: '#FF3B30',
    info: '#007AFF',

    // 그레이스케일
    white: '#FFFFFF',
    gray50: '#F9F9F9',
    gray100: '#F5F5F5',
    gray200: '#E5E5E5',
    gray300: '#D4D4D4',
    gray400: '#A3A3A3',
    gray500: '#737373',
    gray600: '#525252',
    gray700: '#404040',
    gray800: '#262626',
    gray900: '#171717',
    black: '#000000',

    // 투명도
    overlay: 'rgba(0, 0, 0, 0.5)',
    backdrop: 'rgba(0, 0, 0, 0.3)',
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  sizes: {
    button: {
      sm: { height: 32, paddingHorizontal: 12 },
      md: { height: 40, paddingHorizontal: 16 },
      lg: { height: 48, paddingHorizontal: 20 },
    },
    input: {
      sm: { height: 32 },
      md: { height: 40 },
      lg: { height: 48 },
    },
    avatar: {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 48,
      xl: 64,
    },
    icon: {
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
    },
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

  animation: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500,
    },
  },

  zIndex: {
    base: 0,
    raised: 10,
    floating: 100,
    modal: 1000,
    popover: 1100,
    toast: 1300,
  },

  opacity: {
    disabled: 0.4,
    subtle: 0.6,
    medium: 0.8,
    high: 0.9,
  },
} as const;

export type Theme = typeof theme;

//typeof는 theme의 타입들을 생성해줌 거기서 as const로 readonly로 만들어줌 이게 as const를 사용하지 않으면 타입을 그냥 string으로 읽음
