import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

import {
  Container,
  Header,
  PreviousMonthButton,
  PickMonthButton,
  SelectedMonth,
  NextMonthButton,
  ListContainer,
} from './styles';

import Picker from '../../components/Picker';
import api from '../../services/api';
import IKeyValuePair from '../../models/IKeyValuePair';
import SaleResponseTransformer from '../../utils/responseTransformers/SaleResponseTransformer';
import ISalesSummary from '../../models/sales/ISalesSummary';
import Sale from '../../components/Sale';

const Sales: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<IKeyValuePair>();
  const [availableMonths, setAvailableMonths] = useState<IKeyValuePair[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [salesSummary, setSalesSummary] = useState<ISalesSummary>();
  const [isLoading, setIsLoading] = useState(false);

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
        <ActivityIndicator />
      ) : (
        <ListContainer>
          <FlatList
            data={salesSummary?.sales}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <Sale sale={item} />}
          />
        </ListContainer>
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
