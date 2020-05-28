interface ISalePeriod {
  value: string;
  name: string;
}

export default interface IUnityMonthsResponse {
  periods: ISalePeriod[];
}
