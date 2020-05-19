interface IPackageRawResponse {
  packages: Array<{
    average_rating: string;
    versions: IRawPackageVersion[];
    short_url: string;
  }>;
}

interface IRawPackageVersion {
  package_id: string;
  name: string;
  size: string;
  created: string;
  modified: string;
  version_name: string;
  price: string;
  status: string;
}

interface IPackage {
  package_id: string;
  name: string;
  size: number;
  created: Date;
  modified: Date;
  version_name: string;
  price: number;
  status: string;
  average_rating: number;
  short_url: string;
}

class PackageTransformer {
  private static dateStringToDate(str: string): Date {
    const [strYear, strMonth, strDay] = str.split('-');

    const year = Number(strYear);
    const month = Number(strMonth) - 1;
    const day = Number(strDay.substring(0, 2));

    return new Date(year, month, day);
  }

  static transform(raw: IPackageRawResponse): IPackage[] {
    const publishedPackages = raw.packages.filter(p =>
      p.versions.some(v => v.status === 'published'),
    );

    const packages = publishedPackages.map(p => {
      const version = p.versions.find(v => v.status === 'published');

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

      return {
        package_id,
        name,
        size: Number(size),
        created: PackageTransformer.dateStringToDate(created),
        modified: PackageTransformer.dateStringToDate(modified),
        version_name,
        price: Number(price),
        status,
        average_rating: Number(p.average_rating),
        short_url: p.short_url,
      };
    });

    return packages;
  }
}

export default PackageTransformer;
