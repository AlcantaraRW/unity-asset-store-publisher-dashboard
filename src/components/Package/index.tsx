import React from 'react';

import {
  Container,
  PackageName,
  Price,
  Row,
  Version,
  Separator,
  Button,
  ButtonText,
  ButtonsContainer,
} from './styles';

import Rate from '../Rate';

const Package: React.FC = () => {
  return (
    <Container>
      <PackageName>Easy Advertise (Google AdMob)</PackageName>
      <Price>$8</Price>
      <Row>
        <Version>1.0.0</Version>
        <Rate value={4} />
      </Row>
      <Separator />
      <ButtonsContainer>
        <Button>
          <ButtonText>DETAILS</ButtonText>
        </Button>

        <Button>
          <ButtonText>VIEW PACKAGE</ButtonText>
        </Button>

        <Button>
          <ButtonText>REVIEWS</ButtonText>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Package;
