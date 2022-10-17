import { Navigate } from 'react-router-dom';
import PropType from 'prop-types';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropType.node.isRequired,
};
