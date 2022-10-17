import { createContext } from 'react';
import PropTypes from 'prop-types';

import useAuth from '../hooks/useAuth';

const Auth = createContext();

export default function AuthProvider({ children }) {
  const {
    authenticated, handleLogin, handleLogout, loading,
  } = useAuth();
  return (
    <Auth.Provider value={{
      authenticated, handleLogin, handleLogout, loading,
    }}
    >
      {children}
    </Auth.Provider>
  );
}

export { Auth, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
