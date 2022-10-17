import { useState } from 'react';
import AuthServices from '../services/AuthServices';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function handleLogin({ email, password }) {
    try {
      const response = await AuthServices.login({ email, password });

      localStorage.setItem('token', JSON.stringify(response.message));

      setAuthenticated(true);
    } catch (error) {
      console.log('Dados inválidos');
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    // redirecionar
  }

  return {
    authenticated, handleLogin, handleLogout, loading,
  };
}
