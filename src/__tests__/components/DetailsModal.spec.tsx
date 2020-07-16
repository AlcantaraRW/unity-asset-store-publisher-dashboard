import React from 'react';
import { render } from 'react-native-testing-library';
import DetailsModal from '../../components/DetailsModal';
import IKeyValuePair from '../../models/IKeyValuePair';

describe('DetailsModal component', () => {
  it('should render all key/value pairs passed as props', () => {
    const details: IKeyValuePair[] = [
      { key: 'Name', value: 'Tester' },
      { key: 'Email', value: 'tester@tester.com' },
    ];

    const { getAllByTestId, getByText } = render(
      <DetailsModal details={details} onButtonPressed={jest.fn} />,
    );

    const detailViews = getAllByTestId('detail-item');

    expect(detailViews).toHaveLength(2);
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('Tester')).toBeTruthy();
    expect(getByText('Email')).toBeTruthy();
    expect(getByText('tester@tester.com')).toBeTruthy();
  });
});
