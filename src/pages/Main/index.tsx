import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';
import Sale from '../../components/Sale';
import Package from '../../components/Package';
import Review from '../../components/Review';

const Main: React.FC = () => (
  <Container>
    <Review />
  </Container>
);

export default Main;
