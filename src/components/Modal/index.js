import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { useEffect } from 'react';
import {
  Container, Overlay, Header,
} from './style';

import closeIcon from '../../assets/x.svg';

import ModalDetail from './ModalDetail';
import ModalDelete from './ModalDelete';

export default function Modal({
  visible, onClose, notice, mode, title,
}) {
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
          <h3>{title}</h3>
          <span onClick={() => onClose()} aria-hidden="true"><img src={closeIcon} alt="Fechar" /></span>
        </Header>
        {mode === 'detail' ? <ModalDetail notice={notice} /> : <ModalDelete noticeID={notice.noticeID} onClose={onClose} />}
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
