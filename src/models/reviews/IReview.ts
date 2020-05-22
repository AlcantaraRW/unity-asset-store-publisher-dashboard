export default interface IReview {
  body: string;
  created_at: Date;
  subject: string;
  name: string;
  package_id: string;
  rating: number;
  review_id: string;
}
