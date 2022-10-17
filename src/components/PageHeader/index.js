import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Title } from './style';

import arrow from '../../assets/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Title>
      <Link to="/adm">
        <img src={arrow} alt="Voltar" />
        <span>Voltar</span>
      </Link>
      <h2>{title}</h2>
    </Title>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
