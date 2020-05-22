import React, { useState } from 'react';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

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
import DetailsModal from '../DetailsModal';
import IKeyValuePair from '../../models/IKeyValuePair';
import formatDate from '../../utils/formatDate';
import formatPackageSize from '../../utils/formatPackageSize';

interface IPackageProps {
  info: IPackage;
}

const Package: React.FC<IPackageProps> = ({ info }) => {
  const [showModal, setShowModal] = useState(false);
  const { navigate } = useNavigation();

  const {
    package_id,
    name,
    price,
    version_name,
    average_rating,
    short_url,
    created,
    modified,
    size,
  } = info;

  const details: IKeyValuePair[] = [
    { key: 'Package ID', value: package_id },
    { key: 'Version', value: version_name },
    { key: 'Size', value: formatPackageSize(size) },
    { key: 'Created at', value: formatDate(created) },
    { key: 'Modified at', value: formatDate(modified) },
  ];

  function handleViewPackage(): void {
    Linking.openURL(short_url);
  }

  function handleViewReviews(): void {
    navigate('Reviews', {
      package_id,
      name,
    });
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
        <Button onPress={() => setShowModal(true)}>
          <ButtonText>DETAILS</ButtonText>
        </Button>

        <Button onPress={handleViewPackage}>
          <ButtonText>VIEW PACKAGE</ButtonText>
        </Button>

        <Button onPress={handleViewReviews}>
          <ButtonText>REVIEWS</ButtonText>
        </Button>
      </ButtonsContainer>

      <Modal isVisible={showModal}>
        <DetailsModal
          details={details}
          onButtonPressed={() => setShowModal(false)}
        />
      </Modal>
    </Container>
  );
};

export default Package;
