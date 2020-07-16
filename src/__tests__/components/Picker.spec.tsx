import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Picker from '../../components/Picker';
import IKeyValuePair from '../../models/IKeyValuePair';

describe('Picker component', () => {
  it('should display all keys passed as props', () => {
    const items: IKeyValuePair[] = [
      { key: 'first', value: 'First' },
      { key: 'second', value: 'Second' },
      { key: 'third', value: 'Third' },
    ];

    const { getByText } = render(
      <Picker
        items={items}
        onItemPressed={jest.fn}
        onCancelPressed={jest.fn}
      />,
    );

    expect(getByText('first')).toBeTruthy();
    expect(getByText('second')).toBeTruthy();
    expect(getByText('third')).toBeTruthy();
  });

  it('should execute function passed as props when key is pressed', () => {
    const items: IKeyValuePair[] = [{ key: 'option', value: 'Option' }];

    const itemPressed = jest.fn();

    const { getByText } = render(
      <Picker
        items={items}
        onItemPressed={itemPressed}
        onCancelPressed={jest.fn}
      />,
    );

    const touchableKey = getByText('option');
    fireEvent.press(touchableKey);

    expect(itemPressed).toBeCalled();
  });
});
