import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import {
  Container, ContainerNotice, Title,
} from './styles';

import { Button } from '../../components/Button';

import Notice from '../../components/Notice';

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
          <Link to="/notice/new"><Button variant="ghost">Novo Edital</Button></Link>
        </Title>

        <ContainerNotice>
          <Notice name="Extração de relações temporais em textos clínicos" isOpened />

          <Notice name="Extração de relações temporais em textos clínicos" isOpened />

          <Notice name="Extração de relações temporais em textos clínicos" isOpened={false} />
        </ContainerNotice>
      </Container>
    </>

  );
}
