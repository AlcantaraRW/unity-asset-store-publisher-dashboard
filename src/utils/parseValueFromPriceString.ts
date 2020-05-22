export default function priceStringToNumber(str: string): number {
  return Number(str.replace('$ ', ''));
}
