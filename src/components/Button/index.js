import PropTypes from 'prop-types';
import { Container } from './style.js';

export default function Button({ variant, label }) {
  return (
    <Container variant={variant}>
      {label}
    </Container>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  variant: 'default',
};
