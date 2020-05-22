import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import {
  Container,
  Header,
  Title,
  TotalEntries,
  ListContainer,
} from './styles';

import api from '../../services/api';
import Review from '../../components/Review';
import ReviewResponseTransformer from '../../utils/responseTransformers/ReviewResponseTransformer';
import IReview from '../../models/IReview';
import getQuantitativeText from '../../utils/getQuantitativeText';
import Center from '../../components/Center';
import Loader from '../../components/Loader';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { params } = useRoute();

  useEffect(() => {
    async function loadReviews(): Promise<void> {
      const response = await api.get(
        `publisher-info/reviews/30954.json?page=1&rows=20&order_key=date&sort=desc&asset_filter=${params.package_id}`,
      );

      const transformedData = ReviewResponseTransformer.transform(
        response.data,
      );

      setTotalEntries(transformedData.total_entries);
      setReviews(transformedData.reviews);
      setIsLoading(false);
    }

    loadReviews();
  }, [params]);

  return (
    <Container>
      <Header>
        <Title>{params?.name}</Title>
        {totalEntries > 0 && (
          <TotalEntries>
            {getQuantitativeText(totalEntries, 'review')}
          </TotalEntries>
        )}
      </Header>

      {isLoading ? (
        <Center>
          <Loader message="Loading reviews..." />
        </Center>
      ) : (
        <ListContainer>
          <FlatList
            data={reviews}
            keyExtractor={item => item.review_id}
            renderItem={({ item }) => <Review review={item} />}
            showsVerticalScrollIndicator={false}
          />
        </ListContainer>
      )}
    </Container>
  );
};

export default Reviews;
