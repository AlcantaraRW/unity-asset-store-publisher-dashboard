export default function getQuantitativeText(
  quantity: number,
  suffix: string,
): string {
  if (quantity === 0) {
    return `No ${suffix}s`;
  }

  return `${quantity} ${suffix}${quantity > 1 ? 's' : ''}`;
}
