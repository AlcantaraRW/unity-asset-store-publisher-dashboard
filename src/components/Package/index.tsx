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

interface IPackage {
  package_id: string;
  name: string;
  size: number;
  created: Date;
  modified: Date;
  version_name: string;
  price: number;
  status: string;
  average_rating: number;
  short_url: string;
}

interface IPackageProps {
  info: IPackage;
}

const Package: React.FC<IPackageProps> = ({ info }) => {
  const { name, price, version_name, average_rating, short_url } = info;

  return (
    <Container>
      <PackageName>{name}</PackageName>
      <Price>{price}</Price>
      <Row>
        <Version>{version_name}</Version>
        <Rate value={average_rating} />
      </Row>
      <Separator />
      <ButtonsContainer>
        <Button>
          <ButtonText>DETAILS</ButtonText>
        </Button>

        <Button onPress={() => console.log(short_url)}>
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
