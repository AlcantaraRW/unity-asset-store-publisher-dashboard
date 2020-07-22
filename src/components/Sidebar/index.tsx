import React, { memo, useCallback } from 'react';
import { Alert } from 'react-native';

import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
  Container,
  Avatar,
  Header,
  PublisherName,
  Separator,
  DrawerOption,
  SwitchThemeIcon,
  LogoutIcon,
} from './styles';

const Sidebar: React.FC<DrawerContentComponentProps> = ({ ...props }) => {
  const { publisher, clearCredentials } = useAuth();
  const { toggleTheme } = useTheme();

  const confirmLogout = useCallback(() => {
    Alert.alert('Confirm', 'Are you sure you want to logout?', [
      {
        text: 'No',
      },
      {
        text: 'Yes',
        onPress: clearCredentials,
      },
    ]);
  }, [clearCredentials]);

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: publisher?.avatar_url }} />
        <PublisherName>{publisher?.name}</PublisherName>
      </Header>

      <DrawerItemList {...props} />

      <Separator />

      <DrawerOption
        label="Switch theme"
        onPress={toggleTheme}
        icon={() => <SwitchThemeIcon />}
      />

      <DrawerOption
        label="Logout"
        onPress={confirmLogout}
        icon={() => <LogoutIcon />}
      />
    </Container>
  );
};

export default memo(Sidebar);
