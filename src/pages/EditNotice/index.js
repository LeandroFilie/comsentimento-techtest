import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NoticesServices from '../../services/NoticesServices';

import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import NoticeForm from '../../components/NoticeForm';

import Loader from '../../components/Loader';

import { Container } from './style';

export default function EditNotice() {
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

  function handleSubmit() {

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
