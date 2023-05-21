import React from 'react';

import AuthContext from '../contexts/AuthContext';
import { RequestsDB } from '../api/api';
import { Hooks } from '../hooks';

const AuthProviders = ({children}) => {
  const [token, setToken] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});
  
  const { actions  } = Hooks.useRedirect();

  const getToken = React.useCallback(() => {
    const tokenData = JSON.parse(localStorage.getItem("UserInfo"))?.token;

    if(!!tokenData) {
      setToken(tokenData);
    } else {
      setToken("");
    }
  }, []);

  const getMe = React.useCallback(() => {
    if(token) {
      const requests = RequestsDB.AuthUser();
      requests.then(res => setCurrentUser(res.data));
    }
  }, [token]);

  const logOut = React.useCallback(() => {
    setToken("");
    localStorage.removeItem("UserInfo");
    setCurrentUser(null);
    actions.goToAuth();
  }, []);

  React.useEffect(() => {
    getToken();
    getMe();
  }, [getToken, getMe]);

  const values = React.useMemo(() => ({
    token,
    currentUser,
    logOut
  }),[token, currentUser, logOut])

  return (
    <React.Fragment>
      <AuthContext.Provider value={values}>
        {children}
      </AuthContext.Provider>
    </React.Fragment>
  )
};

export default AuthProviders;
