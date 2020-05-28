import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WebView from 'react-native-webview';
import CookieManager from '@react-native-community/cookies';

import { View } from 'react-native';
import Colors from '../../utils/colors';
import { Header, IconContainer, AppName, AssetStoreWebView } from './styles';
import Loader from '../../components/Loader';

const uri = 'https://publisher.assetstore.unity3d.com';

const SignIn: React.FC = () => {
  // useEffect(() => {
  //   const cookieCheck = setInterval(() => {
  //     CookieManager.get(uri).then(cookies => {
  //       console.log({ cookies });
  //     });
  //   }, 1500);
  // }, []);

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
