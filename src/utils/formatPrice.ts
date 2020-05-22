export default function formatPrice(price: number, fixed = true): string {
  return `$${fixed ? price.toFixed(2) : price.toString()}`;
}
