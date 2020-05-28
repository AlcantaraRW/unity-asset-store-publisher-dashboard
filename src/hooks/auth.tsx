import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface IAuthCredentials {
  kharma_session: string;
  kharma_token: string;
}

interface IAuthContextData {
  publisher_id: string;
  isAuthenticated(): boolean;
  setAuthCredentials(kharma_session: string, kharma_token: string): void;
  clearCredentials(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [credentials, setCredentials] = useState<IAuthCredentials>();
  const [publisherId, setPublisherId] = useState('');

  const setAuthCredentials = useCallback(
    (kharma_session: string, kharma_token: string) => {
      setCredentials({ kharma_session, kharma_token });

      api.defaults.headers = {
        Cookie: `kharma_session=${kharma_session}; kharma_token=${kharma_token}`,
      };
    },
    [],
  );

  const isAuthenticated = useCallback(() => {
    if (!credentials) {
      return false;
    }

    const { kharma_session, kharma_token } = credentials;

    return !!kharma_session && !!kharma_token;
  }, [credentials]);

  const clearCredentials = useCallback(() => {
    setCredentials({} as IAuthCredentials);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        publisher_id: publisherId,
        isAuthenticated,
        setAuthCredentials,
        clearCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
