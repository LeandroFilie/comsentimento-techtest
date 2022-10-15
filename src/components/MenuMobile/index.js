import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Container } from './style';

import close from '../../assets/x.svg';

export default function MenuMobile({ visible, setVisible, items }) {
  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'auto';
  }, [visible]);

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

MenuMobile.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  items: PropTypes.node.isRequired,
};
