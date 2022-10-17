import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../services/AuthServices';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function handleLogin({ email, password }) {
    try {
      const response = await AuthServices.login({ email, password });

      localStorage.setItem('token', JSON.stringify(response.message));

      setAuthenticated(true);

      navigate('/adm');
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
