import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './style';

import editIcon from '../../assets/edit.svg';
import trashIcon from '../../assets/trash.svg';
import useAuth from '../../hooks/useAuth';

export default function Notice({ notice, onOpenModal, notDetailed }) {
  const { authenticated } = useAuth();

  if (notDetailed) {
    return (
      <Container isOpened={notice.noticeStatus === 'true'} onClick={onOpenModal} authenticated={authenticated} role="button">
        <h3>{notice.noticeTitle}</h3>
        <p className="status">
          <span />
          {notice.noticeStatus === 'true' ? 'aberto' : 'fechado'}
        </p>
      </Container>
    );
  }

  return (
    <Container isOpened={notice.noticeStatus === 'true'} authenticated={authenticated}>
      <div className="details">
        <h3>{notice.noticeTitle}</h3>
        <p>{notice.noticeDescription}</p>
        <p>{notice.noticeOpeningDate}</p>
        <p className="status">
          <span />
          {notice.noticeStatus === 'true' ? 'aberto' : 'fechado'}
        </p>
      </div>
      <div className="actions">
        <Link to={`/notice/${notice.noticeID}`} role="button"><img src={editIcon} alt="Editar" /></Link>
        <span role="button"><img src={trashIcon} alt="Excluir" onClick={onOpenModal} aria-hidden="true" /></span>
      </div>

    </Container>
  );
}

Notice.propTypes = {
  notice: PropTypes.shape({
    noticeID: PropTypes.number.isRequired,
    noticeTitle: PropTypes.string.isRequired,
    noticeDescription: PropTypes.string.isRequired,
    noticeOpeningDate: PropTypes.string.isRequired,
    noticeStatus: PropTypes.string.isRequired,
  }).isRequired,
  onOpenModal: PropTypes.func,
  notDetailed: PropTypes.bool,
};

Notice.defaultProps = {
  onOpenModal: undefined,
  notDetailed: false,
};
