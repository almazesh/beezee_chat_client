import React from 'react';

import AuthContext from '../contexts/AuthContext';

const AuthProviders = ({children}) => {
  const [token, setToken] = React.useState("");

  React.useEffect(() => {
    const tokenData = JSON.parse(localStorage.getItem("UserInfo"))?.token;

    if(!!tokenData) {
      setToken(tokenData);
    } else {
      setToken("");
    }

  }, []);

  const values = React.useMemo(() => ({
    token
  }),[token])

  return (
    <React.Fragment>
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  )
};

export default AuthProviders;
