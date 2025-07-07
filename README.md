# 🗺️ Treka

React Native Expo 기반의 모던 모바일 애플리케이션

## 📖 목차

- [프로젝트 개요](#-프로젝트-개요)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [시작하기](#-시작하기)
- [개발 가이드](#-개발-가이드)
- [코드 컨벤션](#-코드-컨벤션)
- [배포](#-배포)
- [기여하기](#-기여하기)

## 🎯 프로젝트 개요

Treka는 사용자 친화적인 인터페이스와 효율적인 개발 환경을 제공하는 크로스 플랫폼 모바일 애플리케이션입니다.

### 주요 기능

- 📱 안드로이드 플랫폼 지원 (Android, Web)
- 🔐 사용자 인증 시스템
- 📊 실시간 데이터 동기화
- 🎭 애니메이션 및 제스처 지원

## 🛠️ 기술 스택

### 핵심 기술

- **React Native**: 19.0.0
- **Expo SDK**: 53.0.17
- **Expo Router**: 5.1.3 (파일 기반 라우팅)
- **TypeScript**: 5.8.3

### 상태 관리 & 데이터

- **React Native Reanimated**: 3.17.4 (애니메이션)
- **React Native Gesture Handler**: 2.24.0 (제스처)
- - **zustand**: 2.24.0 (제스처)

### 개발 도구

- **ESLint**: 9.30.1 (코드 품질)
- **Prettier**: 3.6.2 (코드 포맷팅)
- **Husky**: 9.1.7 (Git 훅)
- **Lint-staged**: 16.1.2 (커밋 전 검사)

## 📁 프로젝트 구조

```
Treka/
├── app/                    # Expo Router 기반 라우팅
│   ├── (auth)/            # 인증 관련 스크린들
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   └── layout.tsx
│   ├── (tabs)/            # 메인 탭 네비게이션
│   │   ├── (home)/        # 홈 관련 스크린들
│   │   │   ├── index.tsx
│   │   │   └── detail/[id].tsx
│   │   ├── explore.tsx
│   │   ├── profile.tsx
│   │   └── layout.tsx
│   ├── modal/             # 모달 스크린들
│   │   ├── settings.tsx
│   │   └── help.tsx
│   ├── layout.tsx         # 루트 레이아웃
│   └── +not-found.tsx     # 404 페이지
│
├── src/                   # 메인 소스 코드
│   ├── components/        # 재사용 가능한 컴포넌트
│   │   ├── ui/           # 기본 UI 컴포넌트
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── index.ts   # 배럴 익스포트
│   │   ├── forms/         # 폼 관련 컴포넌트
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SearchForm.tsx
│   │   │   └── index.ts
│   │   ├── layout/        # 레이아웃 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Container.tsx
│   │   │   └── index.ts
│   │   └── feature/       # 기능별 컴포넌트
│   │       ├── auth/
│   │       │   ├── AuthGuard.tsx
│   │       │   ├── SocialLogin.tsx
│   │       │   └── index.ts
│   │       ├── profile/
│   │       │   ├── ProfileCard.tsx
│   │       │   ├── ProfileEditor.tsx
│   │       │   └── index.ts
│   │       └── explore/
│   │           ├── ExploreList.tsx
│   │           ├── ExploreFilter.tsx
│   │           └── index.ts
│   │
│   ├── hooks/             # 커스텀 훅
│   │   ├── useAuth.ts
│   │   ├── useApi.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useTheme.ts
│   │   └── index.ts
│   │
│   ├── services/          # API 및 외부 서비스
│   │   ├── api/
│   │   │   ├── auth.ts
│   │   │   ├── user.ts
│   │   │   ├── posts.ts
│   │   │   ├── client.ts  # HTTP 클라이언트
│   │   │   └── index.ts
│   │   ├── storage/
│   │   │   ├── secure-storage.ts
│   │   │   ├── async-storage.ts
│   │   │   └── index.ts
│   │   └── external/
│   │       ├── analytics.ts
│   │       ├── push-notifications.ts
│   │       └── index.ts
│   │
│   ├── store/             # 상태 관리 (Zustand/Redux)
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   ├── posts.ts
│   │   ├── theme.ts
│   │   └── index.ts
│   │
│   ├── types/             # TypeScript 타입 정의
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   ├── api.ts
│   │   ├── navigation.ts
│   │   └── index.ts
│   │
│   ├── utils/             # 유틸리티 함수
│   │   ├── format.ts      # 날짜, 숫자 포맷팅
│   │   ├── validation.ts  # 폼 검증
│   │   ├── constants.ts   # 상수 정의
│   │   ├── helpers.ts     # 헬퍼 함수
│   │   └── index.ts
│   │
│   └── styles/            # 전역 스타일
│       ├── colors.ts      # 컬러 팔레트
│       ├── typography.ts  # 폰트 스타일
│       ├── spacing.ts     # 여백 정의
│       ├── themes.ts      # 테마 설정
│       └── index.ts
│
├── assets/                # 정적 파일들
│   ├── images/           # 이미지 파일
│   │   ├── logo.png
│   │   ├── splash.png
│   │   └── icons/
│   ├── fonts/            # 폰트 파일
│   │   └── SpaceMono-Regular.ttf
│   └── animations/       # 애니메이션 파일
│       └── loading.json
│
├── tests/                 # 테스트 파일들
│   ├── components/
│   │   ├── ui/
│   │   └── feature/
│   ├── hooks/
│   ├── services/
│   ├── utils/
│   └── mocks/            # 모킹 파일들
│
├── docs/                  # 프로젝트 문서화
│   ├── API.md            # API 문서
│   ├── CONTRIBUTING.md   # 기여 가이드
│   ├── DEPLOYMENT.md     # 배포 가이드
│   └── ARCHITECTURE.md   # 아키텍처 문서
│
├── scripts/               # 빌드/배포 스크립트
│   ├── build.js
│   ├── deploy.js
│   └── reset-project.js
│
├── .github/               # GitHub 설정
│   ├── workflows/        # GitHub Actions
│   └── ISSUE_TEMPLATE/   # 이슈 템플릿
│
├── .vscode/               # VSCode 설정
│   └── settings.json
│
└── .husky/                # Git 훅
    └── pre-commit
```

### 경로 별칭 (Path Aliases)

```typescript
@/*          → ./src/*
@/app/*      → ./app/*
@/assets/*   → ./assets/*
@/components/* → ./src/components/*
@/hooks/*    → ./src/hooks/*
@/services/* → ./src/services/*
@/store/*    → ./src/store/*
@/types/*    → ./src/types/*
@/utils/*    → ./src/utils/*
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.x 이상
- npm 또는 yarn
- Expo CLI (`npm install -g @expo/cli`)

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd Treka

# 의존성 설치
npm install

# 개발 서버 시작
npm start
```

### 플랫폼별 실행

```bash

# Android 에뮬레이터
npm run android

# 웹 브라우저
npm run web
```

## 💻 개발 가이드

### 스크립트 명령어

```bash
npm start          # 개발 서버 시작
npm run lint       # ESLint 실행
npm run format     # Prettier 포맷팅
npm run reset-project  # 프로젝트 초기화
```

### 컴포넌트 작성 가이드

#### 1. 기본 컴포넌트 구조

```typescript
// src/components/ui/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#F2F2F7',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
```

#### 2. Barrel Exports 사용

```typescript
// src/components/ui/index.ts
export { Button } from './Button';
export { Input } from './Input';
export { Card } from './Card';
export type { ButtonProps, InputProps, CardProps } from './types';
```

#### 3. 커스텀 훅 작성

```typescript
// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { User } from '@/types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    // 로그인 로직
  };

  const logout = async () => {
    // 로그아웃 로직
  };

  return { user, loading, login, logout };
}
```

### API 서비스 구조

```typescript
// src/services/api/auth.ts
import { ApiResponse, LoginRequest, User } from '@/types';

export const authApi = {
  login: async (data: LoginRequest): Promise<ApiResponse<User>> => {
    // API 호출 로직
  },

  logout: async (): Promise<ApiResponse<void>> => {
    // API 호출 로직
  },
};
```

## 📋 코드 컨벤션

### TypeScript 규칙

- **인터페이스**: PascalCase (`UserProfile`, `ApiResponse`)
- **타입**: PascalCase (`ButtonVariant`, `ThemeMode`)
- **변수/함수**: camelCase (`userName`, `fetchUserData`)
- **상수**: UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_RETRY_COUNT`)

### 컴포넌트 규칙

- **파일명**: PascalCase (`Button.tsx`, `UserProfile.tsx`)
- **Props 인터페이스**: `ComponentName + Props` (`ButtonProps`)
- **스타일**: camelCase (`buttonContainer`, `primaryText`)

---

### Git 커밋 컨벤션

feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드 추가/수정
chore: 빌드 프로세스, 패키지 매니저 설정

```bash
feat: 사용자 프로필 페이지 추가
fix: 로그인 버튼 터치 영역 수정
docs: API 문서 업데이트
```
```
main # 배포 브랜치
├── dev # 개발 통합 브랜치
├── feat/auth # 기능 개발 브랜치
├── hotfix/login # 긴급 수정 브랜치
└── release/v1.0 # 릴리스 준비 브랜치
```

## 🎨 스타일링 가이드

### 테마 시스템

```typescript
// src/styles/colors.ts
export const Colors = {
  light: {
    primary: '#007AFF',
    background: '#FFFFFF',
    text: '#000000',
  },
  dark: {
    primary: '#0A84FF',
    background: '#000000',
    text: '#FFFFFF',
  },
};
```

### 반응형 디자인

```typescript
// src/utils/responsive.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const responsive = {
  wp: (percentage: number) => (width * percentage) / 100,
  hp: (percentage: number) => (height * percentage) / 100,
};
```

## 🧪 테스팅

### 테스트 실행

```bash
npm test              # 모든 테스트 실행
npm test -- --watch   # 변경사항 감시
npm test -- --coverage # 커버리지 리포트
```

### 테스트 작성 예시

```typescript
// __tests__/components/Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '@/components/ui';

describe('Button Component', () => {
  test('renders correctly', () => {
    const { getByText } = render(
      <Button title="Test Button" onPress={() => {}} />
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  test('calls onPress when pressed', () => {
    const mockPress = jest.fn();
    const { getByText } = render(
      <Button title="Test Button" onPress={mockPress} />
    );

    fireEvent.press(getByText('Test Button'));
    expect(mockPress).toHaveBeenCalledTimes(1);
  });
});
```

## 📱 빌드 & 배포

### 개발 빌드

```bash
# EAS Build 설정
eas build:configure

# 개발 빌드
eas build --profile development --platform android
```

### 프로덕션 배포

```bash
# 프로덕션 빌드
eas build --profile production --platform android

# 앱스토어 제출
eas submit --platform android
```

### 환경 변수 설정

```bash
# .env.local
EXPO_PUBLIC_API_URL=https://api.treka.com
EXPO_PUBLIC_APP_ENV=production
EXPO_PUBLIC_ENABLE_ANALYTICS=true
```

### 코드 리뷰 체크리스트

- [ ] TypeScript 타입 정의가 적절한가?
- [ ] 컴포넌트가 재사용 가능한가?
- [ ] 성능에 영향을 주는 코드는 없는가?
- [ ] 접근성 가이드라인을 준수하는가?
- [ ] 테스트 코드가 작성되었는가?

## 📚 추가 리소스

### 공식 문서

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)

### 유용한 도구

- [Expo Dev Tools](https://expo.dev/tools)
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [Flipper](https://fbflipper.com/)

---
