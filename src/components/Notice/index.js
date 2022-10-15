import PropTypes from 'prop-types';
import { Container } from './style';

import editIcon from '../../assets/edit.svg';
import trashIcon from '../../assets/trash.svg';

export default function Notice({ name, isOpened, onClick }) {
  const authenticate = false;

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
        <p>
          Lorem Ipsum has been the industry standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it
        </p>
        <p>12/12/2021</p>
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
  isOpened: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
