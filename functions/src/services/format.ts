/**
 * Convert to standard number format with 2 decimal
 * ex. 1000000 => 1,000,000.00
 * @param {number} number
 * @return {string}
 */
export function toNumberFormat(number: number): string {
  const result = (Math.round(number*100) / 100).toLocaleString("en-US",
      {minimumFractionDigits: 2}
  );
  return result;
}
