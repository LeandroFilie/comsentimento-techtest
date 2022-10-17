import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Header from '../../components/Header';
import { Container } from './style';

import { Auth } from '../../context/AuthContext';

import NoticeForm from '../../components/NoticeForm';
import PageHeader from '../../components/PageHeader';
import NoticesServices from '../../services/NoticesServices';

export default function NewNotice() {
  const { handleLogout } = useContext(Auth);
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
