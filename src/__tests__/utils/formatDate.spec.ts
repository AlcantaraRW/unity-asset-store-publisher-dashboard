import formatDate from '../../utils/formatDate';

describe('formatDate', () => {
  it("should return date on 'MMM d, yyyy' format", () => {
    const date = new Date(2020, 0, 1);
    const formattedDate = formatDate(date);

    expect(formattedDate).toBe('Jan 1, 2020');
  });
});
