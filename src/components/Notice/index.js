import PropTypes from 'prop-types';
import { Container } from './style';

import editIcon from '../../assets/edit.svg';
import trashIcon from '../../assets/trash.svg';

export default function Notice({
  name, description, date, isOpened, onOpenModal,
}) {
  const authenticate = false;

  if (!authenticate) {
    return (
      <Container isOpened={isOpened} onClick={onOpenModal} authenticate={authenticate}>
        <h3>{name}</h3>
        <p className="status">
          <span />
          {isOpened ? 'aberto' : 'fechado'}
        </p>
      </Container>
    );
  }

  return (
    <Container isOpened={isOpened} authenticate={authenticate}>
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
        <img src={editIcon} alt="Editar" />
        <img src={trashIcon} alt="Excluir" />
      </div>

    </Container>
  );
}

Notice.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func,
};

Notice.defaultProps = {
  onOpenModal: undefined,
};
