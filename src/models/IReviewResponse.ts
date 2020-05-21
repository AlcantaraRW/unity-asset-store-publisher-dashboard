import IReview from './IReview';

export default interface IReviewResponse {
  total_entries: number;
  last_page: number;
  reviews: IReview[];
}
