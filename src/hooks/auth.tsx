import React, { createContext, useCallback, useState, useContext } from 'react';
import auth from '../services/auth';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const [ data, setData ] = useState<AuthState>(() => {

    const token = localStorage.getItem('@Prefeitura:token');
    const user = localStorage.getItem('@Prefeitura:user');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {

    const response = await auth.post('/users/signin', {
      username: email,
      password,
    });
    
    const { token, user } = response.data;

    localStorage.setItem('@Prefeitura:token', token);
    localStorage.setItem('@Prefeitura:user', JSON.stringify(user));

    setData ({ token, user });
  }, []);

  const signOut = useCallback(() => {

    localStorage.removeItem('@Prefeitura:token');
    localStorage.removeItem('@Prefeitura:user');

    setData({} as AuthState);

  }, []);

  return (
    <AuthContext.Provider value = {{ user: data.user, signIn, signOut }}>
      { children }
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

