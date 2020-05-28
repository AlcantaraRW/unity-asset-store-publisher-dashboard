import React, { useMemo } from 'react';
import { Linking } from 'react-native';
import Rate from '../Rate';
import formatDate from '../../utils/formatDate';
import IReview from '../../models/reviews/IReview';

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

interface IReviewProps {
  review: IReview;
}

const Review: React.FC<IReviewProps> = ({ review }) => {
  const { body, created_at, subject, rating, package_id, review_id } = review;

  function handleViewReview(): void {
    const url = `https://assetstore.unity.com/packages/slug/${package_id}/reviews?rid=${review_id}`;

    Linking.openURL(url);
  }

  const formattedCreationDate = useMemo(() => formatDate(created_at), [
    created_at,
  ]);

  return (
    <Container>
      <Subject>{subject}</Subject>
      <Row>
        <Rate value={rating} />
        <Date>{formattedCreationDate}</Date>
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
