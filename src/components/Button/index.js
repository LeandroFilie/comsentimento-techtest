import PropTypes from 'prop-types';
import { Container } from './style.js';
import Loader from '../Loader';

export default function Button({ variant, label, loading }) {
  return (
    <Container variant={variant}>
      {loading ? (
        <Loader />
      ) : (
        label
      )}
    </Container>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  loading: false,
};
