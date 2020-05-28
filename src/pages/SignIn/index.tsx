import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WebView from 'react-native-webview';

import Colors from '../../utils/colors';
import { Header, IconContainer, AppName } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Header>
        <IconContainer>
          <Icon name="cube-outline" size={40} color={Colors.VERY_DARK_GRAY} />
        </IconContainer>
        <AppName>Unity Asset Store Publisher Dashboard</AppName>
      </Header>

      <WebView
        style={{ backgroundColor: Colors.LIGHT_GRAY }}
        source={{ uri: 'https://publisher.assetstore.unity3d.com' }}
      />
    </>
  );
};

export default SignIn;
