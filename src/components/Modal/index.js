import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { useEffect } from 'react';
import {
  Container, Overlay, Header, Content, Footer,
} from './style';

import logo from '../../assets/logo-color.png';
import plusIcon from '../../assets/plus.png';
import closeIcon from '../../assets/x.svg';

export default function Modal({ visible, setVisible, notice }) {
  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'auto';
  }, [visible]);

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
            Título:
            {' '}
            {notice.noticeTitle}
          </h3>
          <p>
            <img src={plusIcon} alt="item" />
            {notice.noticeDescription}
          </p>
          <p>
            <img src={plusIcon} alt="item" />
            Data de Abertura:
            {' '}
            {notice.noticeOpeningDate}
          </p>
          <p>
            <img src={plusIcon} alt="item" />
            Status:
            {' '}
            {notice.noticeStatus}
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

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  notice: PropTypes.shape({
    noticeTitle: PropTypes.string,
    noticeDescription: PropTypes.string,
    noticeOpeningDate: PropTypes.string,
    noticeStatus: PropTypes.string,
  }),
};

Modal.defaultProps = {
  notice: null,
};
