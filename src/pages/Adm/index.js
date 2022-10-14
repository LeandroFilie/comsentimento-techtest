import Header from '../../components/Header';
import {
  Container, ContainerNotice, Title,
} from './styles';

import { Button } from '../../components/Button';

import Notice from '../../components/Notice';

import { Footer } from '../../components/Footer';

export default function Adm() {
  return (
    <>
      <Header>
        <li>
          Sair
          <span />
        </li>
      </Header>

      <Container>
        <Title>
          <h2>Editais Cadastrados</h2>
          <Button variant="ghost">Novo Edital</Button>
        </Title>

        <ContainerNotice>
          <Notice name="Extração de relações temporais em textos clínicos" isOpened />

          <Notice name="Extração de relações temporais em textos clínicos" isOpened />

          <Notice name="Extração de relações temporais em textos clínicos" isOpened={false} />

          <Notice name="Extração de relações temporais em textos clínicos" isOpened />
        </ContainerNotice>
      </Container>

      <Footer />
    </>

  );
}
