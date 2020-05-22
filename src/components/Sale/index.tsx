import React, { useState } from 'react';
import Modal from 'react-native-modal';
import ISale from '../../models/sales/ISale';
import getQuantitativeText from '../../utils/getQuantitativeText';
import formatPrice from '../../utils/formatPrice';
import IKeyValuePair from '../../models/IKeyValuePair';
import formatDate from '../../utils/formatDate';
import DetailsModal from '../DetailsModal';

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

interface ISaleProps {
  sale: ISale;
}

const Sale: React.FC<ISaleProps> = ({ sale }) => {
  const {
    package_name,
    price,
    quantity,
    gross,
    net,
    refunds,
    chargebacks,
    first_sale,
    last_sale,
  } = sale;

  const [showModal, setShowModal] = useState(false);

  const details: IKeyValuePair[] = [
    { key: 'First sale', value: formatDate(first_sale) },
    { key: 'Last sale', value: formatDate(last_sale) },
    { key: 'Refunds', value: refunds },
    { key: 'Chargebacks', value: chargebacks },
  ];

  return (
    <Container>
      <PackageName>{package_name}</PackageName>
      <Price>{formatPrice(price, false)}</Price>
      <Row>
        <Quantity>{getQuantitativeText(quantity, 'sale')}</Quantity>
        <Currencies>
          <Gross>{formatPrice(gross)}</Gross>
          <Net>{formatPrice(net)}</Net>
        </Currencies>
      </Row>
      <Separator />
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>DETAILS</ButtonText>
      </Button>

      <Modal isVisible={showModal}>
        <DetailsModal
          details={details}
          onButtonPressed={() => setShowModal(false)}
        />
      </Modal>
    </Container>
  );
};

export default Sale;
