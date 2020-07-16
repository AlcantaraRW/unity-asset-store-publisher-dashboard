import React from 'react';
import { Linking } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import IReview from '../../models/reviews/IReview';
import Review from '../../components/Review';

describe('Review component', () => {
  const review: IReview = {
    body: 'This package is great!',
    created_at: new Date(2020, 0, 1),
    subject: 'Great package',
    name: 'Name',
    package_id: '123',
    rating: 5,
    review_id: '123456',
  };

  it('should display basic review information', () => {
    const { getByText, getAllByText } = render(<Review review={review} />);

    expect(getByText(review.subject)).toBeTruthy();
    expect(getAllByText(review.body)).toBeTruthy();
  });

  it('should open review URL when View Review button is pressed', () => {
    const openURL = jest.spyOn(Linking, 'openURL');

    const { getByText } = render(<Review review={review} />);

    const viewReviewButton = getByText('VIEW REVIEW');
    expect(viewReviewButton).toBeTruthy();

    fireEvent.press(viewReviewButton);

    expect(openURL).toBeCalledWith(expect.stringContaining(review.package_id));
    expect(openURL).toBeCalledWith(expect.stringContaining(review.review_id));
  });
});
