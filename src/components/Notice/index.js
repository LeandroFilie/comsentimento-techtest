import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Container } from './style';

import { Auth } from '../../context/AuthContext';

import editIcon from '../../assets/edit.svg';
import trashIcon from '../../assets/trash.svg';

export default function Notice({
  id, name, description, date, isOpened, onOpenModal, notDetailed,
}) {
  const { authenticated } = useContext(Auth);

  if (notDetailed) {
    return (
      <Container isOpened={isOpened} onClick={onOpenModal} authenticated={authenticated}>
        <h3>{name}</h3>
        <p className="status">
          <span />
          {isOpened ? 'aberto' : 'fechado'}
        </p>
      </Container>
    );
  }

  return (
    <Container isOpened={isOpened} authenticated={authenticated}>
      <div className="details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{date}</p>
        <p className="status">
          <span />
          {isOpened ? 'aberto' : 'fechado'}
        </p>
      </div>
      <div className="actions">
        <Link to={`/notice/${id}`}><img src={editIcon} alt="Editar" /></Link>
        <span><img src={trashIcon} alt="Excluir" onClick={onOpenModal} aria-hidden="true" /></span>
      </div>

    </Container>
  );
}

Notice.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func,
  notDetailed: PropTypes.bool,
};

Notice.defaultProps = {
  onOpenModal: undefined,
  notDetailed: false,
};
