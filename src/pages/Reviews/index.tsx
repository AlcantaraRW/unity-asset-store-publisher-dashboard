import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Container, Header, Title, ListContainer } from './styles';

import api from '../../services/api';
import Review from '../../components/Review';
import ReviewTransformer from '../../utils/responseTransformers/ReviewTransformer';
import IReview from '../../models/IReview';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    async function loadReviews(): Promise<void> {
      const response = await api.get(
        'publisher-info/reviews/30954.json?page=1&rows=20&order_key=date&sort=desc&asset_filter=96896',
      );

      const transformedData = ReviewTransformer.transform(response.data);

      setReviews(transformedData.reviews);
    }

    loadReviews();
  }, []);

  return (
    <Container>
      <Header>
        <Title>My Asset</Title>
      </Header>

      <ListContainer>
        <FlatList
          data={reviews}
          keyExtractor={item => item.review_id}
          renderItem={({ item }) => <Review review={item} />}
          showsVerticalScrollIndicator={false}
        />
      </ListContainer>
    </Container>
  );
};

export default Reviews;
