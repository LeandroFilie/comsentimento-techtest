import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { useEffect } from 'react';
import {
  Container, Overlay, Header, Content, Footer,
} from './style';

import logo from '../../assets/logo-color.png';
import plusIcon from '../../assets/plus.png';
import closeIcon from '../../assets/x.svg';
import Button from '../Button';
import NoticesServices from '../../services/NoticesServices';

export default function Modal({
  visible, onClose, notice, mode, title,
}) {
  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'auto';
  }, [visible]);

  if (!visible) {
    return null;
  }

  async function handleConfirmDeleteNotice(id) {
    try {
      await NoticesServices.deleteNotice(id);

      console.log('excluir');

      onClose();

      console.log('depois on close');
    } catch (error) {
      console.log(error);
    }
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <Header>
          <h3>{title}</h3>
          <span onClick={() => onClose()} aria-hidden="true"><img src={closeIcon} alt="Fechar" /></span>
        </Header>
        {mode === 'detail' ? (
          <>
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
                {notice.noticeStatus === 'true' ? 'aberto' : 'fechado'}
              </p>
            </Content>
            <Footer>
              <img src={logo} alt="Comsentimento" />
            </Footer>
          </>
        ) : (
          <>
            <Content>Esta ação não poderá ser desfeita!</Content>
            <Footer>
              <Button label="Cancelar" onClick={onClose} variant="cancel" />
              <Button label="Excluir" onClick={() => handleConfirmDeleteNotice(notice.noticeID)} variant="danger" />
            </Footer>
          </>
        )}
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  notice: PropTypes.shape({
    noticeID: PropTypes.number,
    noticeTitle: PropTypes.string,
    noticeDescription: PropTypes.string,
    noticeOpeningDate: PropTypes.string,
    noticeStatus: PropTypes.string,
  }),
  mode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  notice: null,
};
