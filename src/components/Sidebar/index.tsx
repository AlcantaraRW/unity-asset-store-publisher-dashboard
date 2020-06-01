import React, { memo, useCallback } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Avatar,
  Header,
  PublisherName,
  Separator,
  DrawerOption,
} from './styles';

const Sidebar: React.FC<DrawerContentComponentProps> = ({ ...props }) => {
  const { publisher, clearCredentials } = useAuth();

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
        label="Logout"
        onPress={confirmLogout}
        icon={() => <Icon name="logout-variant" size={25} />}
      />
    </Container>
  );
};

export default memo(Sidebar);
