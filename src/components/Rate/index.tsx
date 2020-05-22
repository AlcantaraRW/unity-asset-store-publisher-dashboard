import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from './styles';
import Colors from '../../utils/colors';

interface IRateProps {
  value: number;
}

const Rate: React.FC<IRateProps> = ({ value }) => {
  const stars = new Array(5).fill(0);

  return (
    <Container>
      {stars.map((_, i) => (
        <Icon
          key={i.toString()}
          name={i < value ? 'star' : 'star-outline'}
          color={Colors.VIVID_BLUE}
          size={15}
        />
      ))}
    </Container>
  );
};

export default Rate;
