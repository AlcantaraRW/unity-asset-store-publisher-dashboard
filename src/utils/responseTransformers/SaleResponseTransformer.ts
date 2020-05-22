import parseValueFromPriceString from '../parseValueFromPriceString';
import parseDateFromString from '../parseDateFromString';
import IUnitySalesResponse from '../../models/responses/IUnitySalesResponse';
import ISale from '../../models/sales/ISale';
import ISalesSummary from '../../models/sales/ISalesSummary';
import ISalesTotals from '../../models/sales/ISalesTotals';

class SaleResponseTransformer {
  private static transformItem(rawItem: string[]): ISale {
    const [
      package_name,
      str_price,
      str_quantity,
      str_refunds,
      str_chargebacks,
      str_gross,
      str_first_sale,
      str_last_sale,
      str_net,
    ] = rawItem;

    return {
      package_name,
      price: parseValueFromPriceString(str_price),
      quantity: Number(str_quantity),
      refunds: Number(str_refunds),
      chargebacks: Number(str_chargebacks),
      gross: parseValueFromPriceString(str_gross),
      first_sale: parseDateFromString(str_first_sale),
      last_sale: parseDateFromString(str_last_sale),
      net: parseValueFromPriceString(str_net),
    };
  }

  static transform(raw: IUnitySalesResponse): ISalesSummary {
    const { aaData, result } = raw;

    const sales: ISale[] = aaData.map((data, index) => {
      data.push(result[index]?.net || '$ 0.00');

      return SaleResponseTransformer.transformItem(data);
    });

    const totals = sales.reduce(
      (acc: ISalesTotals, sale: ISale) => {
        acc.quantity += sale.quantity;
        acc.gross += sale.quantity * sale.price;
        acc.net += sale.net;

        return acc;
      },
      {
        quantity: 0,
        gross: 0,
        net: 0,
      },
    );

    return { sales, totals };
  }
}

export default SaleResponseTransformer;
