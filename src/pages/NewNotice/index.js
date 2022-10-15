import Header from '../../components/Header';
import { Container } from './style';

import NoticeForm from '../../components/NoticeForm';
import PageHeader from '../../components/PageHeader';

export default function NewNotice() {
  return (
    <>
      <Header>
        <a href="/">
          Sair
          <span />
        </a>
      </Header>

      <Container>
        <PageHeader title="Novo Edital" />

        <NoticeForm />
      </Container>
    </>
  );
}
