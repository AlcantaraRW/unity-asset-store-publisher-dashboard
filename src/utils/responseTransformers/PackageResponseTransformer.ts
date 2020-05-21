import IUnityPackagesResponse from '../../models/responses/IUnityPackagesResponse';
import IPackage from '../../models/IPackage';
import parseDateFromString from '../parseDateFromString';

class PackageResponseTransformer {
  static transform(response: IUnityPackagesResponse): IPackage[] {
    const publishedPackages = response.packages.filter(p =>
      p.versions.some(v => v.status === 'published'),
    );

    const packages: IPackage[] = [];

    publishedPackages.forEach(p => {
      const version = p.versions.find(v => v.status === 'published');

      if (!version) return;

      const {
        package_id,
        name,
        size,
        created,
        modified,
        version_name,
        price,
        status,
      } = version;

      const transformedPackage = {
        package_id,
        name,
        size: Number(size),
        created: parseDateFromString(created),
        modified: parseDateFromString(modified),
        version_name,
        price: Number(price),
        status,
        average_rating: Number(p.average_rating),
        short_url: p.short_url,
      };

      packages.push(transformedPackage);
    });

    return packages;
  }
}

export default PackageResponseTransformer;
