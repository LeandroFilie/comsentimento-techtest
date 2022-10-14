import ReactDOM from 'react-dom';

import {
  Container, Overlay, Header, Content, Footer,
} from './style';

import Logo from '../../assets/comsentimento_simbolo-01.png';
import CloseIcon from '../../assets/x.svg';

export default function Modal() {
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <Header>
          <h3>Detalhes do Edital</h3>
          <span><img src={CloseIcon} alt="Fechar" /></span>
        </Header>
        <Content>
          <h3>Título: Extração de relações temporais em textos clínicos</h3>
          <p>
            Descrição: Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it. Lorem Ipsum has been the industry standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it
          </p>
          <p>Data de Abertura: 12/12/2021</p>
          <p>Status: aberto</p>
        </Content>
        <Footer>
          <img src={Logo} alt="Comsentimento" />
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
