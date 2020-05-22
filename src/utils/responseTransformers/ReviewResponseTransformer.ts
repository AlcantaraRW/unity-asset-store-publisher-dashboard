import IUnityReviewsResponse from '../../models/responses/IUnityReviewsResponse';
import IReviewResponse from '../../models/IReviewResponse';
import parseDateFromString from '../parseDateFromString';

class ReviewResponseTransformer {
  static transform(raw: IUnityReviewsResponse): IReviewResponse {
    const { total_entries, last_page, reviews } = raw;

    const transformedReviews = reviews.map(review => {
      const {
        body,
        created_at,
        subject,
        name,
        package_id,
        rating,
        review_id,
      } = review;

      return {
        body,
        created_at: parseDateFromString(created_at),
        subject,
        name,
        package_id,
        rating: Number(rating),
        review_id,
      };
    });

    return {
      total_entries,
      last_page,
      reviews: transformedReviews,
    };
  }
}

export default ReviewResponseTransformer;
