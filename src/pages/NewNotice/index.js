import { Link } from 'react-router-dom';

import NoticesServices from '../../services/NoticesServices';

import Header from '../../components/Header';
import NoticeForm from '../../components/NoticeForm';
import PageHeader from '../../components/PageHeader';

import useAuth from '../../hooks/useAuth';
import toast from '../../utils/toast';

import { Container } from './style';

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

      await NoticesServices.createNotice(notice);
      toast({
        type: 'success',
        text: 'Edital cadastrado com sucesso',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Erro ao cadastrar o edital',
      });
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
