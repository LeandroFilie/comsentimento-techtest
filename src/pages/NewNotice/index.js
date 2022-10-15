import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from './style';

import NoticeForm from '../../components/NoticeForm';
import PageHeader from '../../components/PageHeader';

export default function NewNotice() {
  function handleSubmit(formData) {
    console.log(formData);
  }
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
        <PageHeader title="Novo Edital" />

        <NoticeForm
          buttonLabel="Cadastrar"
          onSubmit={handleSubmit}
        />
      </Container>
    </>
  );
}
