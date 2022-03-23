/**
 * Convert to standard number format with 2 decimal
 * ex. 1000000 => 1,000,000.00
 * @param {number} number
 * @return {string}
 */
export function toString(number: number): string {
  const result = (Math.round(number*100) / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
  });
  return result;
}

/**
 * Convert string to number format
 * ex. 1,000,000 => 1000000
 * @param {string} str
 * @return {number} return 0 if str is invalid format
 */
export function toNumber(str: string): number {
  const num = Number(str.replace(/,/g, ""));
  return typeof num === "number" && isFinite(num) ? num : 0;
}
