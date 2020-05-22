import React from 'react';
import IKeyValuePair from '../../models/IKeyValuePair';

import { Container, Detail, Title, Value, Button, ButtonText } from './styles';

interface IDetailsModalProps {
  details: IKeyValuePair[];
  onButtonPressed(): void;
}

const DetailsModal: React.FC<IDetailsModalProps> = ({
  details,
  onButtonPressed,
}) => {
  return (
    <Container>
      {details.map(detail => (
        <Detail key={detail.key}>
          <Title>{detail.key}</Title>
          <Value>{detail.value}</Value>
        </Detail>
      ))}
      <Button onPress={onButtonPressed}>
        <ButtonText>CLOSE</ButtonText>
      </Button>
    </Container>
  );
};

export default DetailsModal;
