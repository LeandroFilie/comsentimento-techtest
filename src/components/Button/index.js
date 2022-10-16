import PropTypes from 'prop-types';
import { Container } from './style.js';

export default function Button({ variant, label, onClick }) {
  return (
    <Container variant={variant} onClick={onClick}>
      {label}
    </Container>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'default',
  onClick: undefined,
};
