import formatMonthAsPeriod from '../../utils/formatMonthAsPeriod';

describe('formatMonthAsPeriod', () => {
  it("should format date as 'YYYYMM' period", () => {
    const date = new Date(2020, 0, 1);
    const period = formatMonthAsPeriod(date);

    expect(period).toBe('202001');
  });
});
