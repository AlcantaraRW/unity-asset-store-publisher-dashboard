import React from 'react';

import { Container, Spinner, Message } from './styles';

interface ILoaderProps {
  message: string;
}

const Loader: React.FC<ILoaderProps> = ({ message }) => {
  return (
    <Container>
      <Spinner />
      <Message>{message}</Message>
    </Container>
  );
};

export default Loader;
