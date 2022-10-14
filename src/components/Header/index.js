import { Link } from 'react-router-dom';
import { Button, Container, Menu } from './styles';

import Logo from '../../assets/logo-horizontal-01.png';

export default function Header() {
  return (
    <Container>
      <Link to="/"><img src={Logo} alt="Comsentimento" /></Link>
      <Menu>
        <li>
          Editais
          <span />
        </li>
        <li>
          Objetivos
          <span />
        </li>
        <Link to="/login"><Button type="button">Área Administrativa</Button></Link>
      </Menu>
    </Container>
  );
}
