import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import NoticesServices from '../../services/NoticesServices';

import { Auth } from '../../context/AuthContext';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import NoticeForm from '../../components/NoticeForm';

import Loader from '../../components/Loader';

import { Container } from './style';
import convertDateToEnUs from '../../utils/convertDateToEnUs';

export default function EditNotice() {
  const { handleLogout } = useContext(Auth);
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

      console.log({ noticeWillEdited });

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

      const response = await NoticesServices.updateNotice(id, notice);

      console.log(response);
    } catch (error) {
      console.log('Ocorreu um erro ao editar o edital', error);
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
