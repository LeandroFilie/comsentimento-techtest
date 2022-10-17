import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from './style';

import NoticeForm from '../../components/NoticeForm';
import PageHeader from '../../components/PageHeader';
import NoticesServices from '../../services/NoticesServices';
import useAuth from '../../hooks/useAuth';

export default function NewNotice() {
  const { handleLogout } = useAuth();
  async function handleSubmit(formData) {
    try {
      const notice = {
        noticeTitle: formData.title,
        noticeDescription: formData.description,
        noticeOpeningDate: formData.date,
        noticePDFDetails: 'C:\\fakepath\\informe-de-rendimentos-2021.pdf',
        noticeStatus: formData.status,
      };

      const response = await NoticesServices.createNotice(notice);

      console.log(response);
    } catch {
      console.log('Ocorreu um erro ao cadastrar o edital');
    }
  }
  return (
    <>
      <Header>
        <Link to="/adm">
          Home
          <span />
        </Link>
        <p onClick={handleLogout} aria-hidden="true">
          Sair
          <span />
        </p>
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
