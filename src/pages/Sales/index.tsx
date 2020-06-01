import React, { useState, useEffect, useMemo } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import Picker from '../../components/Picker';
import IKeyValuePair from '../../models/IKeyValuePair';
import ISalesSummary from '../../models/sales/ISalesSummary';
import Sale from '../../components/Sale';
import getQuantitativeText from '../../utils/getQuantitativeText';
import formatPrice from '../../utils/formatPrice';
import Loader from '../../components/Loader';
import Center from '../../components/Center';
import ApiClient from '../../services/ApiClient';

import {
  Container,
  Header,
  PreviousMonthButton,
  PickMonthButton,
  SelectedMonth,
  NextMonthButton,
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
  const [isLoadingMonths, setIsLoadingMonths] = useState(true);
  const [isLoadingSales, setIsLoadingSales] = useState(false);

  useEffect(() => {
    ApiClient.getAvailableMonths().then(months => {
      if (months) {
        setAvailableMonths(months);
        setSelectedMonth(months[0]);
      }
      setIsLoadingMonths(false);
    });
  }, []);

  useEffect(() => {
    if (!availableMonths.length || !selectedMonth) {
      return;
    }

    setIsLoadingSales(true);

    ApiClient.getSalesFromMonth(selectedMonth.value).then(summary => {
      setSalesSummary(summary);
      setIsLoadingSales(false);
    });
  }, [availableMonths, selectedMonth]);

  const isLoading = useMemo(() => isLoadingMonths || isLoadingSales, [
    isLoadingMonths,
    isLoadingSales,
  ]);

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

  const shouldHidePreviousMonthButton = useMemo(() => {
    const lastIndex = availableMonths.length - 1;
    return selectedMonth === availableMonths[lastIndex];
  }, [availableMonths, selectedMonth]);

  const shouldHideNextMonthButton = useMemo(() => {
    return selectedMonth === availableMonths[0];
  }, [availableMonths, selectedMonth]);

  const totalQuantityText = useMemo(() => {
    if (salesSummary) {
      return getQuantitativeText(salesSummary.totals.quantity, 'sale');
    }

    return '';
  }, [salesSummary]);

  const formattedTotalGrossValue = useMemo(() => {
    if (salesSummary) {
      return formatPrice(salesSummary.totals.gross);
    }

    return '';
  }, [salesSummary]);

  const formattedTotalNetValue = useMemo(() => {
    if (salesSummary) {
      return formatPrice(salesSummary.totals.net);
    }

    return '';
  }, [salesSummary]);

  return (
    <Container>
      <Header>
        <PreviousMonthButton
          shouldHideButton={shouldHidePreviousMonthButton}
          disabled={shouldHidePreviousMonthButton}
          onPress={handlePreviousMonth}
        >
          <Icon name="chevron-left" size={25} />
        </PreviousMonthButton>

        <PickMonthButton onPress={() => setShowModal(true)}>
          <SelectedMonth>{selectedMonth?.key}</SelectedMonth>
        </PickMonthButton>

        <NextMonthButton
          shouldHideButton={shouldHideNextMonthButton}
          disabled={shouldHideNextMonthButton}
          onPress={handleNextMonth}
        >
          <Icon name="chevron-right" size={25} />
        </NextMonthButton>
      </Header>

      {isLoading ? (
        <Center>
          <Loader
            message={`Loading ${isLoadingSales ? 'sales' : 'months'}...`}
          />
        </Center>
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

      {!isLoadingSales && !!salesSummary && (
        <Footer>
          <Quantity>{totalQuantityText}</Quantity>
          <Currencies>
            <Gross>{formattedTotalGrossValue}</Gross>
            <Net>{formattedTotalNetValue}</Net>
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
