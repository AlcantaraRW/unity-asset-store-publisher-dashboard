import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import Picker from '../../components/Picker';
import api from '../../services/api';
import IKeyValuePair from '../../models/IKeyValuePair';
import SaleResponseTransformer from '../../utils/responseTransformers/SaleResponseTransformer';
import ISalesSummary from '../../models/sales/ISalesSummary';
import Sale from '../../components/Sale';
import getQuantitativeText from '../../utils/getQuantitativeText';
import formatPrice from '../../utils/formatPrice';
import Loader from '../../components/Loader';

import {
  Container,
  Header,
  PreviousMonthButton,
  PickMonthButton,
  SelectedMonth,
  NextMonthButton,
  LoaderContainer,
  ListContainer,
  ListSeparator,
  Footer,
  Quantity,
  Currencies,
  Gross,
  Net,
} from './styles';

const Sales: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<IKeyValuePair>();
  const [availableMonths, setAvailableMonths] = useState<IKeyValuePair[]>([]);
  const [salesSummary, setSalesSummary] = useState<ISalesSummary>();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMonths(): Promise<void> {
      const response = await api.get('publisher-info/months/30954.json');

      if (response) {
        const months: IKeyValuePair[] = response.data.periods.map(period => ({
          key: period.name,
          value: period.value,
        }));

        setAvailableMonths(months);
        setSelectedMonth(months[0]);
      }
    }

    loadMonths();
  }, []);

  useEffect(() => {
    async function loadSales(): Promise<void> {
      setIsLoading(true);

      const response = await api.get(
        `publisher-info/sales/30954/${selectedMonth?.value}.json`,
      );

      const summary = SaleResponseTransformer.transform(response.data);
      setSalesSummary(summary);

      setIsLoading(false);
    }

    loadSales();
  }, [selectedMonth]);

  function handleItemSelected(item: IKeyValuePair): void {
    setSelectedMonth(item);
    setShowModal(false);
  }

  function handlePreviousMonth(): void {
    const index = availableMonths.findIndex(
      month => month.value === selectedMonth?.value,
    );

    if (index === availableMonths.length - 1) {
      return;
    }

    setSelectedMonth(availableMonths[index + 1]);
  }

  function handleNextMonth(): void {
    const index = availableMonths.findIndex(
      month => month.value === selectedMonth?.value,
    );

    if (index === 0) {
      return;
    }

    setSelectedMonth(availableMonths[index - 1]);
  }

  return (
    <Container>
      <Header>
        <PreviousMonthButton onPress={handlePreviousMonth}>
          <Icon name="chevron-left" size={25} />
        </PreviousMonthButton>

        <PickMonthButton onPress={() => setShowModal(true)}>
          <SelectedMonth>{selectedMonth?.key}</SelectedMonth>
        </PickMonthButton>

        <NextMonthButton onPress={handleNextMonth}>
          <Icon name="chevron-right" size={25} />
        </NextMonthButton>
      </Header>

      {isLoading ? (
        <LoaderContainer>
          <Loader message="Loading sales..." />
        </LoaderContainer>
      ) : (
        <ListContainer>
          <FlatList
            data={salesSummary?.sales}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <Sale sale={item} />}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListSeparator />}
          />
        </ListContainer>
      )}

      {!isLoading && !!salesSummary && (
        <Footer>
          <Quantity>
            {getQuantitativeText(salesSummary.totals.quantity, 'sale')}
          </Quantity>
          <Currencies>
            <Gross>{formatPrice(salesSummary.totals.gross)}</Gross>
            <Net>{formatPrice(salesSummary.totals.net)}</Net>
          </Currencies>
        </Footer>
      )}

      <Modal isVisible={showModal}>
        {availableMonths.length > 0 && (
          <Picker
            items={availableMonths}
            onItemClicked={handleItemSelected}
            onCancelClicked={() => setShowModal(false)}
          />
        )}
      </Modal>
    </Container>
  );
};

export default Sales;
