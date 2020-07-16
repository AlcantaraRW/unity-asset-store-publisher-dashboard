import formatPackageSize from '../../utils/formatPackageSize';

describe('formatPackageSize', () => {
  it('should format size as KB or MB', () => {
    expect(formatPackageSize(2048)).toBe('2.0 KB');
    expect(formatPackageSize(2048000)).toBe('2.0 MB');
  });
});
