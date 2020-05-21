import React from 'react';
import { Linking } from 'react-native';

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

import IPackage from '../../models/IPackage';
import Rate from '../Rate';

interface IPackageProps {
  info: IPackage;
}

const Package: React.FC<IPackageProps> = ({ info }) => {
  const { name, price, version_name, average_rating, short_url } = info;

  function handleViewPackage(): void {
    Linking.openURL(short_url);
  }

  return (
    <Container>
      <PackageName>{name}</PackageName>
      <Price>{`$${price}`}</Price>
      <Row>
        <Version>{version_name}</Version>
        <Rate value={average_rating} />
      </Row>
      <Separator />
      <ButtonsContainer>
        <Button>
          <ButtonText>DETAILS</ButtonText>
        </Button>

        <Button onPress={handleViewPackage}>
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
