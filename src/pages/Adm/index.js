import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Header from '../../components/Header';

import { Auth } from '../../context/AuthContext';
import {
  Container, Title,
} from './styles';

import Button from '../../components/Button';

import ListNotice from '../../components/ListNotice';
import Modal from '../../components/Modal';

export default function Adm() {
  const { handleLogout } = useContext(Auth);
  const [modalVisible, setModalVisible] = useState(false);
  const [noticeBeingDeleted, setNoticeBeingDeleted] = useState(null);

  function handleOpenModal(notice) {
    setModalVisible(true);
    setNoticeBeingDeleted(notice);
  }

  function handleCloseModal() {
    setNoticeBeingDeleted(null);
    setModalVisible(false);
  }

  return (
    <>
      <Modal
        visible={modalVisible}
        onClose={handleCloseModal}
        notice={noticeBeingDeleted}
        mode="delete"
        title="Tem certeza que deseja excluir esse edital?"
      />
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
        <Title>
          <h2>Editais Cadastrados</h2>
          <Link to="/notice"><Button variant="ghost" label="Novo Edital" /></Link>
        </Title>

        <ListNotice
          onOpenModal={handleOpenModal}
          noticeIdBeingDeleted={noticeBeingDeleted?.noticeID}
        />
      </Container>
    </>

  );
}
