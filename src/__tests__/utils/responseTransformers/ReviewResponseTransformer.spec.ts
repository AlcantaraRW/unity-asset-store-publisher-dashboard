import ReviewResponseTransformer from '../../../utils/responseTransformers/ReviewResponseTransformer';
import IUnityReviewsResponse from '../../../models/responses/IUnityReviewsResponse';

const reviewsResponse: IUnityReviewsResponse = {
  total_entries: 25,
  last_page: 2,
  reviews: [
    {
      body: 'This is a great package!',
      created_at: '2020-01-10',
      subject: 'Good package',
      name: 'My Awesome Package',
      package_id: '123456',
      rating: '5',
      review_id: '987654',
    },
    {
      body: 'Nice package!',
      created_at: '2020-01-15',
      subject: 'Nice Asset',
      name: 'My Awesome Package',
      package_id: '123456',
      rating: '4',
      review_id: '456789',
    },
  ],
};

describe('ReviewResponseTransformer class', () => {
  it('should transform a raw reviews response from Unity API into an IReviewResponse object', () => {
    const transformedReviewResponse = ReviewResponseTransformer.transform(
      reviewsResponse,
    );

    const { total_entries, last_page, reviews } = transformedReviewResponse;

    expect(total_entries).toBe(25);
    expect(last_page).toBe(2);
    expect(reviews).toHaveLength(2);

    const first = reviews[0];
    expect(first.body).toBe('This is a great package!');
    expect(first.created_at).toStrictEqual(new Date(2020, 0, 10));
    expect(first.subject).toBe('Good package');
    expect(first.name).toBe('My Awesome Package');
    expect(first.package_id).toBe('123456');
    expect(first.rating).toBe(5);
    expect(first.review_id).toBe('987654');

    const second = reviews[1];
    expect(second.body).toBe('Nice package!');
    expect(second.created_at).toStrictEqual(new Date(2020, 0, 15));
    expect(second.subject).toBe('Nice Asset');
    expect(second.name).toBe('My Awesome Package');
    expect(second.package_id).toBe('123456');
    expect(second.rating).toBe(4);
    expect(second.review_id).toBe('456789');
  });
});
