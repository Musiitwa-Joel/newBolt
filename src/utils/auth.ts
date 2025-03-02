import api from './api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

// Login user
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const response = await api.post('/auth/login', credentials);
    
    // Store token in localStorage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('isAuthenticated', 'true');
    
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Logout user
export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('isAuthenticated');
};

// Get current user
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const response = await api.get('/auth/user');
    return response.data;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return localStorage.getItem('isAuthenticated') === 'true';
};