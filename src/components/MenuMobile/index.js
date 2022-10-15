/* eslint-disable react/prop-types */
import { Container } from './style';

import close from '../../assets/x.svg';

export default function MenuMobile({ visible, setVisible, items }) {
  return (
    <Container isVisible={visible}>
      <button type="button" onClick={() => setVisible(false)}>
        <img src={close} alt="Fechar" />
      </button>
      <nav onClick={() => setVisible(false)} aria-hidden="true">
        {items}
      </nav>
    </Container>
  );
}
