import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import NoticesServices from '../../services/NoticesServices';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import NoticeForm from '../../components/NoticeForm';
import Loader from '../../components/Loader';

import useAuth from '../../hooks/useAuth';

import toast from '../../utils/toast';
import convertDateToEnUs from '../../utils/convertDateToEnUs';

import { Container } from './style';

export default function EditNotice() {
  const { handleLogout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [noticeFound, setNoticeFound] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function loadNotice() {
      const noticeData = await NoticesServices.getNoticeById(id);
      setNoticeFound(noticeData);
      setIsLoading(false);
    }

    loadNotice();
  }, [id]);

  async function handleSubmit(formData) {
    try {
      const notice = {};

      const noticeWillEdited = await NoticesServices.getNoticeById(id);

      if (noticeWillEdited.noticeTitle !== formData.title) {
        notice.noticeTitle = formData.title;
      }

      if (noticeWillEdited.noticeDescription !== formData.description) {
        notice.noticeDescription = formData.description;
      }

      if (convertDateToEnUs(noticeWillEdited.noticeOpeningDate) !== formData.date) {
        notice.noticeOpeningDate = formData.date;
      }

      if (noticeWillEdited.noticeStatus !== formData.status) {
        notice.noticeStatus = formData.status;
      }

      await NoticesServices.updateNotice(id, notice);

      toast({
        type: 'success',
        text: 'Alterações salvas com sucesso',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao salvar as alterações',
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
        <PageHeader title="Editar Edital" />

        { isLoading ? (
          <Loader />
        ) : (
          <NoticeForm
            buttonLabel="Salvar Alterações"
            onSubmit={handleSubmit}
            noticeData={noticeFound}
          />
        )}

      </Container>
    </>
  );
}
