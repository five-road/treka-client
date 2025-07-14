export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  provider: 'email' | 'google' | 'kakao';
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthentication: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  name: string;
}

export interface SocialAuthResult {
  user: User;
  token: string;
}
