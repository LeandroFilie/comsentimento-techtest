/* eslint-disable react/prop-types */
import ReactDOM from 'react-dom';

import {
  Container, Overlay, Header, Content, Footer,
} from './style';

import logo from '../../assets/logo-color.png';
import plusIcon from '../../assets/plus.png';
import closeIcon from '../../assets/x.svg';

export default function Modal({ visible, setVisible }) {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <Header>
          <h3>Detalhes do Edital</h3>
          <span onClick={setVisible} aria-hidden="true"><img src={closeIcon} alt="Fechar" /></span>
        </Header>
        <Content>
          <h3>
            <img src={plusIcon} alt="item" />
            Título: Extração de relações temporais em textos clínicos
          </h3>
          <p>
            <img src={plusIcon} alt="item" />
            Descrição: Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it. Lorem Ipsum has been the industry standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it
          </p>
          <p>
            <img src={plusIcon} alt="item" />
            Data de Abertura: 12/12/2021
          </p>
          <p>
            <img src={plusIcon} alt="item" />
            Status: aberto
          </p>
        </Content>
        <Footer>
          <img src={logo} alt="Comsentimento" />
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
