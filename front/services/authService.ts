import axios from 'axios';

const API_URL = 'http://localhost:5000/auth'; 

interface AuthData {
  email: string;
  password: string;
}

interface RegisterData extends AuthData {
  name: string;
}

// Função para login
export const login = async (data: AuthData) => {
  const response = await axios.post(`${API_URL}/login`, data);
  localStorage.setItem('token', response.data.access_token); 
  return response.data;
};

// Função para cadastro
export const register = async (data: RegisterData) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};
