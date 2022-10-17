/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Form } from './styles';

import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import { Input } from '../../components/Input';

import useAuth from '../../hooks/useAuth';

export default function Login() {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('token');

    if (auth) {
      navigate('/adm');
    }
  }, []);

  const isFormValid = (email && password);

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    setIsSubmitting(true);
    event.preventDefault();

    await handleLogin({ email, password });

    setIsSubmitting(false);
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Comsentimento" />
        <h1>Área Administrativa</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <label>
          Endereço de E-mail
          <Input
            variant="login"
            type="text"
            placeholder="email@example.com"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>

        <label>
          Sua Senha
          <Input
            variant="login"
            type="password"
            placeholder="********"
            value={password}
            onChange={handleChangePassword}
          />
        </label>

        <Button
          variant="default"
          label="Entrar"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        />
      </Form>
    </Container>
  );
}
