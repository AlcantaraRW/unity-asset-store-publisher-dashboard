export default function parseDateFromString(str: string): Date {
  const [strYear, strMonth, strDay] = str.split('-');

  const year = Number(strYear);
  const month = Number(strMonth) - 1;
  const day = Number(strDay.substring(0, 2));

  return new Date(year, month, day);
}
