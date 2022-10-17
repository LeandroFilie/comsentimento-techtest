import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../services/AuthServices';
import toast from '../utils/toast';

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
    } catch {
      toast({
        type: 'danger',
        text: 'E-mail e/ou senha incorretos',
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/');
  }

  return {
    authenticated, handleLogin, handleLogout, loading,
  };
}
