import parseDateFromString from '../../utils/parseDateFromString';

describe('parseDateFromString', () => {
  it('should create a Date object from a date-formatted string', () => {
    const parsedDate = parseDateFromString('2020-01-01');

    expect(parsedDate.getFullYear()).toBe(2020);
    expect(parsedDate.getMonth()).toBe(0);
    expect(parsedDate.getDate()).toBe(1);
  });
});
