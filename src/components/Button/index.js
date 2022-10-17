import PropTypes from 'prop-types';
import { Container } from './style';

import Loader from '../Loader';

export default function Button({
  variant, label, onClick, disabled, isLoading,
}) {
  return (
    <Container
      variant={variant}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {!isLoading && label}
      {isLoading && <Loader color="#FAFAFA" size="24" />}
    </Container>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  onClick: undefined,
  disabled: false,
  isLoading: false,
};
