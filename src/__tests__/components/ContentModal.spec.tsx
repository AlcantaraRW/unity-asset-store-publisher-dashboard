import React from 'react';
import { render } from 'react-native-testing-library';
import ContentModal from '../../components/ContentModal';

describe('ContentModal component', () => {
  it('should render content passed as props', () => {
    const testContent = 'This is a test content';
    const emptyFunction = jest.fn();

    const { getByText } = render(
      <ContentModal content={testContent} onButtonPressed={emptyFunction} />,
    );

    expect(getByText(testContent)).toBeTruthy();
  });
});
