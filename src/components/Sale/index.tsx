import React, { useState, useMemo } from 'react';
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

  const formattedCurrentPrice = useMemo(() => formatPrice(price, false), [
    price,
  ]);

  const salesQuantityText = useMemo(
    () => getQuantitativeText(quantity, 'sale'),
    [quantity],
  );

  const formattedGrossValue = useMemo(() => formatPrice(gross), [gross]);

  const formattedNetValue = useMemo(() => formatPrice(net), [net]);

  return (
    <Container>
      <PackageName>{package_name}</PackageName>
      <Price>{formattedCurrentPrice}</Price>
      <Row>
        <Quantity>{salesQuantityText}</Quantity>
        <Currencies>
          <Gross>{formattedGrossValue}</Gross>
          <Net>{formattedNetValue}</Net>
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
