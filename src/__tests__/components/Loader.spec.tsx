import React from 'react';
import { render } from 'react-native-testing-library';
import Loader from '../../components/Loader';

describe('Loader component', () => {
  it('should display message passed as props', () => {
    const message = 'My test message';

    const { getByText } = render(<Loader message={message} />);

    expect(getByText(message)).toBeTruthy();
  });
});
