interface IUnityPackageVersion {
  package_id: string;
  name: string;
  size: string;
  created: string;
  modified: string;
  version_name: string;
  price: string;
  status: string;
}

export default interface IPackageRawResponse {
  packages: Array<{
    average_rating: string;
    versions: IUnityPackageVersion[];
    short_url: string;
  }>;
}
