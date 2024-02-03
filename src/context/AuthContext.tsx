import React, {createContext, useState} from 'react';
import {UserDetail} from '../model/UserDetail';
import {Login} from '../model/Login';
import {userDetail} from '../utils/userDb';

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logOut: () => {},
});

const AuthProvider = (props: any) => {
  const {children} = props;
  const [auth, setAuth] = useState<any>(undefined);

  console.log('auth provider', auth);

  const login = () => {
    setAuth(userDetail);
  };

  const logOut = () => {
    setAuth(undefined);
  };

  const valueContext = {
    auth,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
