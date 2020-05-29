import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';
import ApiClient from '../services/ApiClient';
import IPublisher from '../models/responses/overview/IPublisher';

interface IAuthCredentials {
  kharma_session: string;
  kharma_token: string;
  publisher?: IPublisher;
}

interface IAuthData {
  kharma_session: string;
  kharma_token: string;
  publisher: IPublisher;
}

interface IAuthContextData {
  publisher: IPublisher;
  isAuthenticated(): boolean;
  setAuthCredentials(kharma_session: string, kharma_token: string): void;
  clearCredentials(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthData>({} as IAuthData);

  const setAuthCredentials = useCallback(
    (kharma_session: string, kharma_token: string) => {
      ApiClient.setAuthCookies(kharma_session, kharma_token).then(publisher => {
        setData({ kharma_session, kharma_token, publisher });

        api.defaults.headers = {
          Cookie: `kharma_session=${kharma_session}; kharma_token=${kharma_token}`,
        };
      });
    },
    [],
  );

  const isAuthenticated = useCallback(() => {
    if (!data) {
      return false;
    }

    const { kharma_session, kharma_token, publisher } = data;

    return !!kharma_session && !!kharma_token && !!publisher;
  }, [data]);

  const clearCredentials = useCallback(() => {
    setData({} as IAuthData);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        publisher: data.publisher,
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
