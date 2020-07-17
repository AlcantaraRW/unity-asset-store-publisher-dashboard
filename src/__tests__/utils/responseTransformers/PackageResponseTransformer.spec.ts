import PackageResponseTransformer from '../../../utils/responseTransformers/PackageResponseTransformer';
import IUnityPackagesResponse from '../../../models/responses/IUnityPackagesResponse';

const packagesResponse: IUnityPackagesResponse = {
  packages: [
    {
      versions: [
        {
          status: 'published',
          name: 'My First Package',
          package_id: '123',
          modified: '2020-01-01 09:30:00',
          size: '1166495',
          created: '2020-01-01 09:30:00',
          version_name: '2.0.0',
          price: '10.00',
        },
      ],
      short_url: 'firstpackage.com',
      average_rating: '4',
    },
    {
      versions: [
        {
          status: 'published',
          name: 'My Second Package',
          package_id: '456',
          modified: '2020-01-02 10:00:00',
          size: '18000',
          created: '2020-01-02 10:00:00',
          version_name: '1.0.0',
          price: '10.00',
        },
        {
          status: 'deprecated',
          name: 'My Second Package',
          package_id: '456',
          modified: '2019-01-01 08:15:00',
          size: '12000',
          created: '2019-01-01 08:15:00',
          version_name: '0.0.1',
          price: '5.00',
        },
      ],
      short_url: 'secondpackage.com',
      average_rating: null,
    },
  ],
};

describe('PackageResponseTransformer class', () => {
  it('should transform a raw packages response from Unity API into an array of published IPackage objects', () => {
    const packageInfo = PackageResponseTransformer.transform(packagesResponse);

    expect(packageInfo).toHaveLength(2);

    const first = packageInfo[0];
    expect(first.status).toBe('published');
    expect(first.name).toBe('My First Package');
    expect(first.package_id).toBe('123');
    expect(first.modified).toStrictEqual(new Date(2020, 0, 1));
    expect(first.size).toBe(1166495);
    expect(first.created).toStrictEqual(new Date(2020, 0, 1));
    expect(first.version_name).toBe('2.0.0');
    expect(first.price).toBe(10);

    const second = packageInfo[1];
    expect(second.status).toBe('published');
    expect(second.name).toBe('My Second Package');
    expect(second.package_id).toBe('456');
    expect(second.modified).toStrictEqual(new Date(2020, 0, 2));
    expect(second.size).toBe(18000);
    expect(second.created).toStrictEqual(new Date(2020, 0, 2));
    expect(second.version_name).toBe('1.0.0');
    expect(second.price).toBe(10);
  });

  it('should return an empty array when there are no published packages on response', () => {
    const response: IUnityPackagesResponse = {
      packages: [
        {
          versions: [
            {
              status: 'deprecated',
              name: 'My First Package',
              package_id: '123',
              modified: '2020-01-01 09:30:00',
              size: '1166495',
              created: '2020-01-01 09:30:00',
              version_name: '2.0.0',
              price: '10.00',
            },
            {
              status: 'draft',
              name: 'My First Package',
              package_id: '123',
              modified: '2020-01-01 09:30:00',
              size: '1166495',
              created: '2020-01-01 09:30:00',
              version_name: '2.0.0',
              price: '10.00',
            },
            {
              status: 'pendingReview',
              name: 'My First Package',
              package_id: '123',
              modified: '2020-01-01 09:30:00',
              size: '1166495',
              created: '2020-01-01 09:30:00',
              version_name: '2.0.0',
              price: '10.00',
            },
          ],
          short_url: 'firstpackage.com',
          average_rating: '4',
        },
      ],
    };

    const packages = PackageResponseTransformer.transform(response);

    expect(packages).toHaveLength(0);
  });
});
