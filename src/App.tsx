import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import Routes from './routes';
import { AuthProvider } from './hooks/auth';
import NotificationBar from './components/NotificationBar';
import { ThemeProvider } from './hooks/theme';

const App: React.FC = () => {
  const [hasInternetConnection, setHasInternetConnection] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setHasInternetConnection(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContainer>
          {!hasInternetConnection && (
            <NotificationBar message="No internet connection" />
          )}
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
