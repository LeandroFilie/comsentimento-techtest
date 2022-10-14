/* eslint-disable react/prop-types */
import { Container } from './style';

import EditIcon from '../../assets/edit.svg';
import TrashIcon from '../../assets/trash.svg';

export default function Notice({ name, isOpened }) {
  const authenticate = true;

  if (!authenticate) {
    return (
      <Container isOpened={isOpened}>
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
        <img src={EditIcon} alt="Editar" />
        <img src={TrashIcon} alt="Excluir" />
      </div>

    </Container>
  );
}
