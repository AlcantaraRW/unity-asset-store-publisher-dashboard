import React from 'react';

import {
  Container,
  PackageName,
  Price,
  Row,
  Quantity,
  Currencies,
  Gross,
  Net,
  Separator,
  Button,
  ButtonText,
} from './styles';

const Sale: React.FC = () => {
  return (
    <Container>
      <PackageName>Easy Advertise (Google AdMob)</PackageName>
      <Price>$8</Price>
      <Row>
        <Quantity>10 sales</Quantity>
        <Currencies>
          <Gross>$80.00</Gross>
          <Net>$56.10</Net>
        </Currencies>
      </Row>
      <Separator />
      <Button>
        <ButtonText>DETAILS</ButtonText>
      </Button>
    </Container>
  );
};

export default Sale;
