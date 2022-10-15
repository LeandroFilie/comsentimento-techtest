/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { Container, Menu, Nav } from './styles';

import logo from '../../assets/logo-horizontal-color.png';

export default function Header({ children }) {
  return (
    <Container>
      <Menu>
        <Link to="/"><img src={logo} alt="Comsentimento" /></Link>
        <Nav>
          { children }
        </Nav>
      </Menu>
    </Container>
  );
}
