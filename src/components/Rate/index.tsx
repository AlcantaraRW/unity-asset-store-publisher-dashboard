import React from 'react';

import { Container, StarIcon } from './styles';

interface IRateProps {
  value: number;
}

const Rate: React.FC<IRateProps> = ({ value }) => {
  const stars = new Array(5).fill(0);

  return (
    <Container>
      {stars.map((_, i) => (
        <StarIcon
          key={i.toString()}
          name={i < value ? 'star' : 'star-outline'}
        />
      ))}
    </Container>
  );
};

export default Rate;
