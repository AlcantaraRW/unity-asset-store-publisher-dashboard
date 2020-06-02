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
import DataProvider from '../../services/DataProvider';

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
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState<number | undefined>();
  const [totalEntries, setTotalEntries] = useState(0);
  const [reviews, setReviews] = useState<IReview[]>([]);

  const { params } = useRoute<ReviewsRouteProp>();

  async function loadReviews(): Promise<void> {
    const response = await DataProvider.getReviewsFromPackage(
      params.package_id,
      currentPage,
    );

    if (currentPage > (lastPage || 999)) {
      return;
    }

    setLastPage(response.last_page);
    setCurrentPage(currentPage + 1);
    setTotalEntries(response.total_entries);
    setReviews(oldReviews => [...oldReviews, ...response.reviews]);
    setIsLoading(false);
  }

  useEffect(() => {
    loadReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            onEndReachedThreshold={0.5}
            onEndReached={loadReviews}
          />
        </ListContainer>
      )}
    </Container>
  );
};

export default Reviews;
