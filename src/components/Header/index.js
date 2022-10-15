/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Container, Menu, Nav } from './styles';

import logo from '../../assets/logo-horizontal-color.png';
import menuMobileIcon from '../../assets/menu.svg';
import MenuMobile from '../MenuMobile';

export default function Header({ children }) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Container>
      <Menu>
        <Link to="/"><img src={logo} alt="Comsentimento" /></Link>
        <Nav>
          { children }
        </Nav>
        {!menuVisible && (
          <button type="button" className="menu-icon" onClick={() => setMenuVisible(true)}>
            <img src={menuMobileIcon} alt="Menu" />
          </button>
        ) }

      </Menu>
      <MenuMobile
        items={children}
        visible={menuVisible}
        setVisible={setMenuVisible}
      />
    </Container>
  );
}
