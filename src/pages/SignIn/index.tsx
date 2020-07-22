import React, { useEffect } from 'react';
import CookieManager from '@react-native-community/cookies';
import Loader from '../../components/Loader';
import { useAuth } from '../../hooks/auth';

import {
  Header,
  IconContainer,
  AppIcon,
  AppName,
  AssetStoreWebView,
} from './styles';

const uri = 'https://publisher.assetstore.unity3d.com';

const SignIn: React.FC = () => {
  const { setAuthCredentials } = useAuth();

  useEffect(() => {
    const cookieCheck = setInterval(() => {
      CookieManager.get(uri).then(cookies => {
        const { kharma_session, kharma_token } = cookies;
        const foundAuthCookies = !!kharma_session && !!kharma_token;

        if (foundAuthCookies) {
          clearInterval(cookieCheck);
          CookieManager.clearAll().then(() =>
            setAuthCredentials(kharma_session, kharma_token),
          );
        }
      });
    }, 1500);
  }, [setAuthCredentials]);

  return (
    <>
      <Header>
        <IconContainer>
          <AppIcon />
        </IconContainer>
        <AppName>Unity Asset Store Publisher Dashboard</AppName>
      </Header>

      <AssetStoreWebView
        source={{ uri }}
        sharedCookiesEnabled
        thirdPartyCookiesEnabled
        renderLoading={() => <Loader message="Loading webview..." />}
      />
    </>
  );
};

export default SignIn;
