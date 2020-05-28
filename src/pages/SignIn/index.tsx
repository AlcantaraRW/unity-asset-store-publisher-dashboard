import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CookieManager from '@react-native-community/cookies';

import { Header, IconContainer, AppName, AssetStoreWebView } from './styles';
import Loader from '../../components/Loader';
import Colors from '../../utils/colors';
import { useAuth } from '../../hooks/auth';

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
          <Icon name="cube-outline" size={40} color={Colors.VERY_DARK_GRAY} />
        </IconContainer>
        <AppName>Unity Asset Store Publisher Dashboard</AppName>
      </Header>

      <AssetStoreWebView
        source={{ uri }}
        renderLoading={() => <Loader message="Loading webview..." />}
      />
    </>
  );
};

export default SignIn;
