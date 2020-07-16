import React from 'react';
import { Linking } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import Package from '../../components/Package';
import IPackage from '../../models/packages/IPackage';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('Package component', () => {
  const packageInfo: IPackage = {
    package_id: '123',
    name: 'My Awesome Package',
    size: 10,
    created: new Date(2020, 0, 1),
    modified: new Date(2020, 0, 2),
    version_name: '1.0.0',
    price: 10,
    status: 'published',
    average_rating: 5,
    short_url: 'myawesomepackage.com',
  };

  it('should display basic package information', () => {
    const { getByText } = render(<Package info={packageInfo} />);

    expect(getByText(packageInfo.name)).toBeTruthy();
    expect(getByText(packageInfo.version_name)).toBeTruthy();
    expect(getByText('$10')).toBeTruthy();
  });

  it('should open package URL when View Package button is pressed', () => {
    const openURL = jest.spyOn(Linking, 'openURL');

    const { getByText } = render(<Package info={packageInfo} />);

    const viewPackageButton = getByText('VIEW PACKAGE');
    expect(viewPackageButton).toBeTruthy();

    fireEvent.press(viewPackageButton);

    expect(openURL).toBeCalledWith(packageInfo.short_url);
  });

  it('should navigate to Reviews page passing package ID and name as props when Reviews button is pressed', () => {
    const { getByText } = render(<Package info={packageInfo} />);

    const reviewsButton = getByText('REVIEWS');
    expect(reviewsButton).toBeTruthy();

    fireEvent.press(reviewsButton);

    expect(mockNavigate).toBeCalledWith('Reviews', {
      package_id: '123',
      name: 'My Awesome Package',
    });
  });
});
