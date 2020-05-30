import axios, { AxiosInstance } from 'axios';
import IUnityPublisherOverviewResponse from '../models/responses/IUnityPublisherOverviewResponse';
import IPublisher from '../models/responses/overview/IPublisher';
import IUnityMonthsResponse from '../models/responses/IUnityMonthsResponse';
import IUnityPackagesResponse from '../models/responses/IUnityPackagesResponse';
import IKeyValuePair from '../models/IKeyValuePair';
import IUnitySalesResponse from '../models/responses/IUnitySalesResponse';
import SaleResponseTransformer from '../utils/responseTransformers/SaleResponseTransformer';
import ISalesSummary from '../models/sales/ISalesSummary';
import IPackage from '../models/packages/IPackage';
import PackageResponseTransformer from '../utils/responseTransformers/PackageResponseTransformer';
import IReviewResponse from '../models/reviews/IReviewResponse';
import IUnityReviewsResponse from '../models/responses/IUnityReviewsResponse';
import ReviewResponseTransformer from '../utils/responseTransformers/ReviewResponseTransformer';

class ApiClient {
  private client: AxiosInstance;

  private loggedPublisher: IPublisher | undefined;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://publisher.assetstore.unity3d.com/api',
    });
  }

  private async getPublisherInfo(): Promise<IPublisher> {
    const response = await this.client.get<IUnityPublisherOverviewResponse>(
      'publisher/overview.json',
    );

    const { id, name, keyimage } = response.data.overview;

    const publisher: IPublisher = {
      id,
      name,
      avatar_url: `http:${keyimage.small}`,
    };

    this.loggedPublisher = publisher;
    return publisher;
  }

  async setAuthCookies(
    kharma_session: string,
    kharma_token: string,
  ): Promise<IPublisher> {
    this.client.defaults.headers = {
      Cookie: `kharma_session=${kharma_session}; kharma_token=${kharma_token}`,
    };

    return this.getPublisherInfo();
  }

  async getAvailableMonths(): Promise<IKeyValuePair[]> {
    const response = await this.client.get<IUnityMonthsResponse>(
      `publisher-info/months/${this.loggedPublisher?.id}.json`,
    );

    const months: IKeyValuePair[] = response.data.periods.map(period => ({
      key: period.name,
      value: period.value,
    }));

    return months;
  }

  async getSalesFromMonth(month: string): Promise<ISalesSummary> {
    const response = await this.client.get<IUnitySalesResponse>(
      `publisher-info/sales/${this.loggedPublisher?.id}/${month}.json`,
    );

    const transformedData = SaleResponseTransformer.transform(response.data);

    return transformedData;
  }

  async getPublishedPackages(): Promise<IPackage[]> {
    const response = await this.client.get<IUnityPackagesResponse>(
      'management/packages.json',
    );

    const transformedData = PackageResponseTransformer.transform(response.data);

    return transformedData;
  }

  async getReviewsFromPackage(package_id: string): Promise<IReviewResponse> {
    const response = await this.client.get<IUnityReviewsResponse>(
      `publisher-info/reviews/${this.loggedPublisher?.id}.json?page=1&rows=20&order_key=date&sort=desc&asset_filter=${package_id}`,
    );

    const transformedData = ReviewResponseTransformer.transform(response.data);

    return transformedData;
  }
}

export default new ApiClient();
