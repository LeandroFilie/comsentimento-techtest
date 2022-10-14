/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Container, Menu } from './styles';

import Logo from '../../assets/logo-horizontal-01.png';

export default function Header({ children }) {
  return (
    <Container>
      <Link to="/"><img src={Logo} alt="Comsentimento" /></Link>
      <Menu>
        { children }
      </Menu>
    </Container>
  );
}
