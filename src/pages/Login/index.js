/* eslint-disable jsx-a11y/label-has-associated-control */
import { Container, Header, Form } from './styles';

import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import { Input } from '../../components/Input';

export default function Login() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo Comsentimento" />
        <h1>Área Administrativa</h1>
      </Header>

      <Form>
        <label>
          Endereço de E-mail
          <Input variant="login" type="text" placeholder="email@example.com" />
        </label>

        <label>
          Sua Senha
          <Input variant="login" type="password" placeholder="********" />
        </label>

        <Button variant="default" label="Entrar" />
      </Form>
    </Container>
  );
}
