import { Link } from 'react-router-dom';
import { Button, Container, Menu } from './styles';

import Logo from '../../assets/logo-horizontal-01.png';

export default function Header() {
  return (
    <Container>
      <Link to="/"><img src={Logo} alt="Comsentimento" /></Link>
      <Menu>
        <li>
          <a href="#notice">Editais</a>
          <span />
        </li>
        <li>
          <a href="#program">O Programa</a>
          <span />
        </li>
        <Link to="/login"><Button type="button">Área Administrativa</Button></Link>
      </Menu>
    </Container>
  );
}
