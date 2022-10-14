/* eslint-disable jsx-a11y/label-has-associated-control */
import { Container, Header, Form } from './styles';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export default function Login() {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo Comsentimento" />
        <h1>Área Administrativa</h1>
      </Header>

      <Form>
        <label>
          Endereço de E-mail
          <Input variant="light" type="text" placeholder="email@example.com" />
        </label>

        <label>
          Sua Senha
          <Input variant="light" type="password" placeholder="********" />
        </label>

        <Button variant="form">Entrar</Button>
      </Form>
    </Container>
  );
}
