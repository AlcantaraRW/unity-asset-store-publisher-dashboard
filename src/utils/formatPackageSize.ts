export default function formatPackageSize(size: number): string {
  const measures = ['KB', 'MB'];
  let iterations = 0;
  let calculatedSize = size;

  do {
    calculatedSize /= 1024;
    iterations += 1;
  } while (calculatedSize > 1024);

  return `${calculatedSize.toFixed(1)} ${measures[iterations - 1]}`;
}
