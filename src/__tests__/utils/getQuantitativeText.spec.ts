import getQuantitativeText from '../../utils/getQuantitativeText';

describe('getQuantitativeText', () => {
  it("should return 'no' prefix when quantity is zero", () => {
    expect(getQuantitativeText(0, 'sale')).toBe('No sales');
  });

  it('should return text in singular form when quantity is one', () => {
    expect(getQuantitativeText(1, 'package')).toBe('1 package');
  });

  it('should return text in plural form when quantity is more than one', () => {
    expect(getQuantitativeText(5, 'review')).toBe('5 reviews');
  });
});
