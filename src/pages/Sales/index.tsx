import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  PreviousMonthButton,
  SelectedMonth,
  NextMonthButton,
} from './styles';

const Sales: React.FC = () => {
  return (
    <Container>
      <Header>
        <PreviousMonthButton>
          <Icon name="chevron-left" size={25} />
        </PreviousMonthButton>

        <SelectedMonth>2020 May</SelectedMonth>

        <NextMonthButton>
          <Icon name="chevron-right" size={25} />
        </NextMonthButton>
      </Header>
    </Container>
  );
};

export default Sales;
