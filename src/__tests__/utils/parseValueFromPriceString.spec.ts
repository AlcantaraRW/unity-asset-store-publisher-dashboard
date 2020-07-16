import parseValueFromPriceString from '../../utils/parseValueFromPriceString';

describe('parseValueFromPriceString', () => {
  it('should extract number from price-formatted string', () => {
    expect(parseValueFromPriceString('$ 10')).toBe(10);
    expect(parseValueFromPriceString('$ 10.00')).toBe(10);
    expect(parseValueFromPriceString('$ 10.50')).toBe(10.5);
  });
});
