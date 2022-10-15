/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Arrow from '../../assets/arrow.svg';
import { Title } from './style';

export default function PageHeader({ title }) {
  return (
    <Title>
      <Link to="/adm">
        <img src={Arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <h2>{title}</h2>
    </Title>
  );
}
