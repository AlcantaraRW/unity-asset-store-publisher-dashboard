export default interface IUnityReviewsResponse {
  total_entries: number;
  last_page: number;
  reviews: Array<{
    body: string;
    created_at: string;
    subject: string;
    name: string;
    package_id: string;
    rating: string;
    review_id: string;
  }>;
}
