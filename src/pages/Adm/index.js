import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import {
  Container, Title,
} from './styles';

import Button from '../../components/Button';

import ListNotice from '../../components/ListNotice';

export default function Adm() {
  return (
    <>
      <Header>
        <Link to="/adm">
          Home
          <span />
        </Link>
        <a href="/">
          Sair
          <span />
        </a>
      </Header>

      <Container>
        <Title>
          <h2>Editais Cadastrados</h2>
          <Link to="/notice"><Button variant="ghost" label="Novo Edital" /></Link>
        </Title>

        <ListNotice />
      </Container>
    </>

  );
}
