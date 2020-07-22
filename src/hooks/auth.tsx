import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import IPublisher from '../models/responses/overview/IPublisher';
import DataProvider from '../services/DataProvider';

interface IAuthData {
  kharma_session: string;
  kharma_token: string;
  publisher: IPublisher;
}

interface IAuthContextData {
  isLoadingAuthData: boolean;
  publisher: IPublisher;
  isAuthenticated(): boolean;
  setAuthCredentials(kharma_session: string, kharma_token: string): void;
  clearCredentials(): void;
}

const SESSION = 'kharma_session';
const TOKEN = 'kharma_token';

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthData>({} as IAuthData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStoredData(): Promise<void> {
      const [session, token] = await AsyncStorage.multiGet([SESSION, TOKEN]);

      const kharma_session = session[1];
      const kharma_token = token[1];

      if (!!kharma_session && !!kharma_token) {
        const publisher = await DataProvider.setAuthCookies(
          kharma_session,
          kharma_token,
        );

        setData({ kharma_session, kharma_token, publisher });
      }

      setIsLoading(false);
    }

    loadStoredData();
  }, []);

  const setAuthCredentials = useCallback(
    async (kharma_session: string, kharma_token: string) => {
      await AsyncStorage.multiSet([
        [SESSION, kharma_session],
        [TOKEN, kharma_token],
      ]);

      const publisher = await DataProvider.setAuthCookies(
        kharma_session,
        kharma_token,
      );

      setData({ kharma_session, kharma_token, publisher });
    },
    [],
  );

  const isAuthenticated = useCallback(() => {
    const { kharma_session, kharma_token } = data;

    return !!kharma_session && !!kharma_token;
  }, [data]);

  const clearCredentials = useCallback(async () => {
    await AsyncStorage.multiRemove([SESSION, TOKEN]);

    setData({} as IAuthData);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        publisher: data.publisher,
        isAuthenticated,
        setAuthCredentials,
        clearCredentials,
        isLoadingAuthData: isLoading,
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
