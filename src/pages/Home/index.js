import { Link } from 'react-router-dom';

import { useState } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';

import {
  TitleSection, Description, Container, ContainerNotice,
} from './styles';

import Modal from '../../components/Modal';
import Banner from '../../components/Banner';
import plusIcon from '../../assets/plus.png';
import ListNotice from '../../components/ListNotice';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [noticeBeingDetailed, setNoticeBeingDetailed] = useState(null);

  function handleOpenModal(notice) {
    setModalVisible(true);
    setNoticeBeingDetailed(notice);
  }

  function handleCloseModal() {
    console.log('close modal');
    setNoticeBeingDetailed(null);
    setModalVisible(false);
  }

  return (
    <Container>
      <Modal
        visible={modalVisible}
        onClose={handleCloseModal}
        notice={noticeBeingDetailed}
        mode="detail"
        title="Detalhes do Edital"
      />

      <Header>
        <a href="#notice">
          Editais
          <span />
        </a>
        <a href="#program">
          O Programa
          <span />
        </a>
        <Link to="/login"><Button variant="ghost" label="Área Administrativa" /></Link>
      </Header>

      <Banner />

      <ContainerNotice id="notice">
        <TitleSection>
          <img src={plusIcon} alt="Icon" />
          <h2>Editais de Linhas de Pesquisa</h2>
        </TitleSection>

        <ListNotice onOpenModal={handleOpenModal} />

      </ContainerNotice>

      <Description id="program">
        <TitleSection>
          <img src={plusIcon} alt="Icon" />
          <h2>O Programa</h2>
        </TitleSection>

        <div className="content">
          <div className="objective">
            <p>
              <img src={plusIcon} alt="Item" />
              Aproximar a organização do ambiente de pesquisa acadêmico
            </p>
            <p>
              <img src={plusIcon} alt="Item" />
              Aumentar a contratação e retenção de talentos de IA em saúde
            </p>
            <p>
              <img src={plusIcon} alt="Item" />
              Demonstrar autoridade no tema através de publicações científicas
            </p>
            <p>
              <img src={plusIcon} alt="Item" />
              Desenvolver tecnologias que possam ser acopladas ao pipeline atual
              de produtos ou que possibilitem novos caminhos de geração de valor
            </p>
          </div>

          <div className="requirements">
            <p>
              <img src={plusIcon} alt="Item" />
              Estudantes de Iniciação Científica, Mestrado, Doutorado ou Pós-doutorado
            </p>

            <p>
              <img src={plusIcon} alt="Item" />
              Interesse nos temas apresentados
            </p>

            <p>
              <img src={plusIcon} alt="Item" />
              Recebimento de bolsa
            </p>

            <p>
              <img src={plusIcon} alt="Item" />
              Se tornará parte da equipe de NLP da Comsentimento
            </p>
          </div>
        </div>

      </Description>
      <Footer />
    </Container>
  );
}
