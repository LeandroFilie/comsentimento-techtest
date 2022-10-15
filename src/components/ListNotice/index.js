import PropTypes from 'prop-types';
import Notice from '../Notice';
import { Container } from './style';

export default function ListNotice({ onClick }) {
  return (
    <Container>
      <Notice name="Extração de relações temporais em textos clínicos" isOpened onClick={onClick} />

      <Notice name="Extração de relações temporais em textos clínicos" isOpened onClick={onClick} />

      <Notice name="Extração de relações temporais em textos clínicos" isOpened={false} onClick={onClick} />

      <Notice name="Extração de relações temporais em textos clínicos" isOpened onClick={onClick} />
    </Container>
  );
}

ListNotice.propTypes = {
  onClick: PropTypes.func,
};

ListNotice.defaultProps = {
  onClick: undefined,
};
