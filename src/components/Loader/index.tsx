import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Message } from './styles';
import Colors from '../../utils/colors';

interface ILoaderProps {
  message: string;
}

const Loader: React.FC<ILoaderProps> = ({ message }) => {
  return (
    <Container>
      <ActivityIndicator size={40} color={Colors.VIVID_BLUE} />
      <Message>{message}</Message>
    </Container>
  );
};

export default Loader;
