import { Navigate } from 'react-router-dom';
import PropType from 'prop-types';

import useAuth from '../../hooks/useAuth';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropType.node.isRequired,
};
