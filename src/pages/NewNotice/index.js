import Header from '../../components/Header';
import { Container } from './style';

import NoticeForm from '../../components/NoticeForm';
import PageHeader from '../../components/PageHeader';

export default function NewNotice() {
  return (
    <>
      <Header>
        <li>
          Sair
          <span />
        </li>
      </Header>

      <Container>
        <PageHeader title="Novo Edital" />

        <NoticeForm />
      </Container>
    </>
  );
}
