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
import getRealm from './RealmService';
import SalesSummary from '../schemas/SalesSummary';
import formatMonthAsPeriod from '../utils/formatMonthAsPeriod';

class DataProvider {
  private apiClient: AxiosInstance;

  private loggedPublisher: IPublisher | undefined;

  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://publisher.assetstore.unity3d.com/api',
    });
  }

  private async getPublisherInfo(): Promise<IPublisher> {
    const response = await this.apiClient.get<IUnityPublisherOverviewResponse>(
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
    this.apiClient.defaults.headers = {
      Cookie: `kharma_session=${kharma_session}; kharma_token=${kharma_token}`,
    };

    return this.getPublisherInfo();
  }

  async getAvailableMonths(): Promise<IKeyValuePair[]> {
    const response = await this.apiClient.get<IUnityMonthsResponse>(
      `publisher-info/months/${this.loggedPublisher?.id}.json`,
    );

    const months: IKeyValuePair[] = response.data.periods.map(period => ({
      key: period.name,
      value: period.value,
    }));

    return months;
  }

  async getSalesFromMonth(month: string): Promise<ISalesSummary> {
    const shouldUseCache = this.dataCanBeCached(month);

    if (shouldUseCache) {
      const realm = await getRealm();
      const cachedData = realm.objectForPrimaryKey<SalesSummary>(
        SalesSummary.schema.name,
        month,
      );

      if (cachedData) {
        return cachedData;
      }
    }

    const response = await this.apiClient.get<IUnitySalesResponse>(
      `publisher-info/sales/${this.loggedPublisher?.id}/${month}.json`,
    );

    const transformedData = SaleResponseTransformer.transform(response.data);

    if (shouldUseCache) {
      const realm = await getRealm();

      realm.write(() => {
        realm.create(
          SalesSummary.schema.name,
          { id: month, ...transformedData },
          true,
        );
      });
    }

    return transformedData;
  }

  dataCanBeCached(month: string): boolean {
    const current = new Date();
    const previous = new Date();
    previous.setMonth(current.getMonth() - 1);

    const cannotBeCached = [
      formatMonthAsPeriod(current),
      formatMonthAsPeriod(previous),
    ];

    return !cannotBeCached.includes(month);
  }

  async getPublishedPackages(): Promise<IPackage[]> {
    const response = await this.apiClient.get<IUnityPackagesResponse>(
      'management/packages.json',
    );

    const transformedData = PackageResponseTransformer.transform(response.data);

    return transformedData;
  }

  async getReviewsFromPackage(
    package_id: string,
    page: number,
  ): Promise<IReviewResponse> {
    const response = await this.apiClient.get<IUnityReviewsResponse>(
      `publisher-info/reviews/${this.loggedPublisher?.id}.json?page=${page}&rows=20&order_key=date&sort=desc&asset_filter=${package_id}`,
    );

    const transformedData = ReviewResponseTransformer.transform(response.data);

    return transformedData;
  }
}

export default new DataProvider();
