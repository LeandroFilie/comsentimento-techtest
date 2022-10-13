/* eslint-disable react/prop-types */
import { Container } from './style';

import PlusIcon from '../../assets/plus.png';

export default function Edital({ name, isOpened }) {
  return (
    <Container isOpened={isOpened}>
      <p>{name}</p>
      <p className="status">
        <img src={PlusIcon} alt="icon" />
        {isOpened ? 'aberto' : 'fechado'}
      </p>
    </Container>
  );
}
