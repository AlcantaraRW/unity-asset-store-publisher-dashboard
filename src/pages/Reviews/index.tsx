import React, { useState, useEffect, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import Review from '../../components/Review';
import IReview from '../../models/reviews/IReview';
import getQuantitativeText from '../../utils/getQuantitativeText';
import Center from '../../components/Center';
import Loader from '../../components/Loader';

import {
  Container,
  Header,
  Title,
  TotalEntries,
  ListContainer,
} from './styles';
import ApiClient from '../../services/ApiClient';

type ReviewsRouteProp = RouteProp<
  {
    Reviews: {
      package_id: string;
      name: string;
    };
  },
  'Reviews'
>;

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { params } = useRoute<ReviewsRouteProp>();

  useEffect(() => {
    async function loadReviews(): Promise<void> {
      ApiClient.getReviewsFromPackage(params.package_id).then(response => {
        setTotalEntries(response.total_entries);
        setReviews(response.reviews);
        setIsLoading(false);
      });
    }

    loadReviews();
  }, [params]);

  const totalReviewsText = useMemo(
    () => getQuantitativeText(totalEntries, 'review'),
    [totalEntries],
  );

  return (
    <Container>
      <Header>
        <Title>{params?.name}</Title>
        {totalEntries > 0 && <TotalEntries>{totalReviewsText}</TotalEntries>}
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
