import PropTypes from 'prop-types';
import { Container } from './style';

import editIcon from '../../assets/edit.svg';
import trashIcon from '../../assets/trash.svg';

export default function Notice({
  name, description, date, isOpened, onClick,
}) {
  const authenticate = true;

  if (!authenticate) {
    return (
      <Container isOpened={isOpened} onClick={onClick}>
        <h3>{name}</h3>
        <p className="status">
          <span />
          {isOpened ? 'aberto' : 'fechado'}
        </p>
      </Container>
    );
  }

  return (
    <Container isOpened={isOpened}>
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
  onClick: PropTypes.func,
};

Notice.defaultProps = {
  onClick: undefined,
};
