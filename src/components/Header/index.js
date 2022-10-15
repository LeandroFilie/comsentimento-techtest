/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Container, Menu, Nav } from './styles';

import Logo from '../../assets/logo-horizontal-01.png';

export default function Header({ children }) {
  return (
    <Container>
      <Menu>
        <Link to="/"><img src={Logo} alt="Comsentimento" /></Link>
        <Nav>
          { children }
        </Nav>
      </Menu>
    </Container>
  );
}
