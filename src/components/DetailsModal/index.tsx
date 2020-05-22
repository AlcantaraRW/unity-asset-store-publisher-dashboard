import React from 'react';

import {
  Container,
  Detail,
  Title,
  Value,
  Separator,
  Button,
  ButtonText,
} from './styles';

import IKeyValuePair from '../../models/IKeyValuePair';

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
        <>
          <Detail key={detail.key}>
            <Title>{detail.key}</Title>
            <Value>{detail.value}</Value>
          </Detail>

          <Separator />
        </>
      ))}
      <Button onPress={onButtonPressed}>
        <ButtonText>CLOSE</ButtonText>
      </Button>
    </Container>
  );
};

export default DetailsModal;
