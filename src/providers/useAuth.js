import React from 'react';

import AuthContext from '../contexts/AuthContext';

const useAuth = () => {
  const context = React.useContext(AuthContext);
  return context
}

export default useAuth;
