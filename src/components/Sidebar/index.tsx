import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { TouchableOpacity, Text } from 'react-native';
import { Container, Avatar, Header, PublisherName, Separator } from './styles';

const Sidebar: React.FC<DrawerContentComponentProps> = ({ ...props }) => {
  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri:
              'http://assetstorev1-prd-cdn.unity3d.com/key-image/5167477e-166e-4dca-9e13-9e58c4cc39e5.png',
          }}
        />
        <PublisherName>Primordium Game Studio</PublisherName>
      </Header>

      <DrawerItemList {...props} />

      <Separator />

      <DrawerItem label="Test..." onPress={() => console.log('Tested!')} />
    </Container>
  );
};

export default Sidebar;
