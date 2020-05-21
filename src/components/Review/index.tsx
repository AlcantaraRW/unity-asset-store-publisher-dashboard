import React from 'react';
import { Linking } from 'react-native';

import {
  Container,
  Subject,
  Row,
  Date,
  Content,
  Separator,
  Button,
  ButtonText,
} from './styles';

import Rate from '../Rate';
import formatDate from '../../utils/formatDate';

interface IReviewProps {
  review: IReview;
}

interface IReview {
  body: string;
  created_at: Date;
  subject: string;
  name: string;
  package_id: string;
  rating: number;
  review_id: string;
}

const Review: React.FC<IReviewProps> = ({ review }) => {
  const { body, created_at, subject, rating, package_id, review_id } = review;

  function handleViewReview(): void {
    const url = `https://assetstore.unity.com/packages/slug/${package_id}/reviews?rid=${review_id}`;

    Linking.openURL(url);
  }

  return (
    <Container>
      <Subject>{subject}</Subject>
      <Row>
        <Rate value={rating} />
        <Date>{formatDate(created_at)}</Date>
      </Row>
      <Content>{body}</Content>
      <Separator />
      <Button onPress={handleViewReview}>
        <ButtonText>VIEW REVIEW</ButtonText>
      </Button>
    </Container>
  );
};

export default Review;
