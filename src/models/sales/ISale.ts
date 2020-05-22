export default interface ISale {
  package_name: string;
  price: number;
  quantity: number;
  refunds: number;
  chargebacks: number;
  gross: number;
  first_sale: Date;
  last_sale: Date;
  net: number;
}
