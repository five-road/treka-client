import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, AuthState } from '../types/auth';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithKakao: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  loadUser: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isLoading: false,
  isAuthentication: false,

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      // TODO: API 호출
      console.log('로그인:', { email, password });

      // 임시 사용자 데이터
      const user: User = {
        id: '1',
        email,
        name: '사용자',
        provider: 'email',
      };

      await AsyncStorage.setItem('user', JSON.stringify(user));
      set({ user, isAuthentication: true, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  loginWithGoogle: async () => {
    set({ isLoading: true });
    try {
      // TODO: Google 로그인 구현
      console.log('구글 로그인');
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  loginWithKakao: async () => {
    set({ isLoading: true });
    try {
      // TODO: 카카오 로그인 구현
      console.log('카카오 로그인');
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  signup: async (email: string, password: string, name: string) => {
    set({ isLoading: true });
    try {
      // TODO: API 호출
      console.log('회원가입:', { email, password, name });
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: async () => {
    await AsyncStorage.removeItem('user');
    set(state => ({
      ...state,
      user: null,
      isAuthentication: false,
    }));
  },

  loadUser: async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        set(state => ({
          ...state,
          user,
          isAuthentication: true,
        }));
      }
    } catch (error) {
      console.log('사용자 정보 로드 실패:', error);
    }
  },
}));
