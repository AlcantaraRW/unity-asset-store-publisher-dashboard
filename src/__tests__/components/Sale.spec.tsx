import React from 'react';
import { render } from 'react-native-testing-library';
import Sale from '../../components/Sale';
import ISale from '../../models/sales/ISale';

describe('Sale component', () => {
  const sale: ISale = {
    package_name: 'My Awesome Package',
    price: 10,
    quantity: 5,
    refunds: 0,
    chargebacks: 0,
    gross: 50,
    first_sale: new Date(2020, 0, 1),
    last_sale: new Date(2020, 0, 2),
    net: 35,
  };

  it('should display basic sale information', () => {
    const { getByText } = render(<Sale sale={sale} />);

    expect(getByText(sale.package_name)).toBeTruthy();
    expect(getByText('$10')).toBeTruthy();
    expect(getByText('5 sales')).toBeTruthy();
    expect(getByText('$50.00')).toBeTruthy();
    expect(getByText('$35.00')).toBeTruthy();
  });
});
