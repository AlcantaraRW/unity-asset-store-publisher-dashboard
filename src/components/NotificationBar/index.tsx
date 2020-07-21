import React from 'react';

import { Container, Message } from './styles';

export type NotificationBarMessageType = 'danger';

interface INotificationBarProps {
  message: string;
}

const NotificationBar: React.FC<INotificationBarProps> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
};

export default NotificationBar;
