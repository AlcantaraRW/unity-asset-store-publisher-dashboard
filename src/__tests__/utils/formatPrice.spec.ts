import formatPrice from '../../utils/formatPrice';

describe('formatPrice', () => {
  it('should format price with digits when fixed arg is equal to true', () => {
    const formattedPrice = formatPrice(10);

    expect(formattedPrice).toBe('$10.00');
  });

  it('should format price without digits when fixed arg is equal to false', () => {
    const formattedPrice = formatPrice(10, false);

    expect(formattedPrice).toBe('$10');
  });
});
