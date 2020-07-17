import SaleResponseTransformer from '../../../utils/responseTransformers/SaleResponseTransformer';
import IUnitySalesResponse from '../../../models/responses/IUnitySalesResponse';

const salesResponse: IUnitySalesResponse = {
  aaData: [
    [
      'My First Package',
      '$ 8.00',
      '2',
      '0',
      '0',
      '$ 16.00',
      '2020-06-06',
      '2020-06-23',
    ],
    [
      'My Second Package',
      '$ 12.00',
      '11',
      '0',
      '0',
      '$ 132.00',
      '2020-06-01',
      '2020-06-30',
    ],
  ],
  result: [
    {
      net: '$ 11.21',
    },
    {
      net: '$ 92.40',
    },
  ],
};

describe('SaleResponseTransformer class', () => {
  it('should transform a raw sales response from Unity API into an ISalesSummary object', () => {
    const salesSummary = SaleResponseTransformer.transform(salesResponse);

    const { sales, totals } = salesSummary;

    expect(sales).toHaveLength(2);

    const first = sales[0];
    expect(first.package_name).toBe('My First Package');
    expect(first.price).toBe(8);
    expect(first.quantity).toBe(2);
    expect(first.refunds).toBe(0);
    expect(first.chargebacks).toBe(0);
    expect(first.gross).toBe(16);
    expect(first.first_sale).toStrictEqual(new Date(2020, 5, 6));
    expect(first.last_sale).toStrictEqual(new Date(2020, 5, 23));
    expect(first.net).toBe(11.21);

    const second = sales[1];
    expect(second.package_name).toBe('My Second Package');
    expect(second.price).toBe(12);
    expect(second.quantity).toBe(11);
    expect(second.refunds).toBe(0);
    expect(second.chargebacks).toBe(0);
    expect(second.gross).toBe(132);
    expect(second.first_sale).toStrictEqual(new Date(2020, 5, 1));
    expect(second.last_sale).toStrictEqual(new Date(2020, 5, 30));
    expect(second.net).toBe(92.4);

    expect(totals.quantity).toBe(13);
    expect(totals.gross).toBe(148);
    expect(totals.net.toFixed(2)).toBe('103.61');
  });
});
