import React, {createContext, useState} from 'react';
import {UserDetail} from '../model/UserDetail';
import {userDetail} from '../utils/userDb';

const initialize: UserDetail = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
};

export const AuthContext = createContext({
  auth: initialize,
  login: () => {},
  logOut: () => {},
});

const AuthProvider = (props: any) => {
  const {children} = props;
  const [auth, setAuth] = useState<UserDetail | null>();

  const login = () => {
    setAuth(userDetail);
  };

  const logOut = () => {
    setAuth(null);
  };

  const valueContext = {
    auth,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
