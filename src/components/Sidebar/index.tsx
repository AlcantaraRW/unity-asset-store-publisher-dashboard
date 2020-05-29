import React, { memo } from 'react';
import {
  DrawerContentComponentProps,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { Container, Avatar, Header, PublisherName, Separator } from './styles';
import { useAuth } from '../../hooks/auth';

const Sidebar: React.FC<DrawerContentComponentProps> = ({ ...props }) => {
  const { publisher } = useAuth();

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: publisher?.avatar_url }} />
        <PublisherName>{publisher?.name}</PublisherName>
      </Header>

      <DrawerItemList {...props} />

      <Separator />

      <DrawerItem label="Test..." onPress={() => console.log('Tested!')} />
    </Container>
  );
};

export default memo(Sidebar);
