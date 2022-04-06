
/**
 * Convert type to another type
 */
export class Converter {
  /**
   * Convert to standard number format with 2 decimal
   * @param {number} number
   * @return {string}
   * @example 1000000 => 1,000,000
   */
  toString(number: number): string {
    const result = (Math.round(number*100) / 100).toLocaleString("en-US", {
      minimumFractionDigits: 2,
    });
    return result;
  }

  /**
   * Convert string to number format
   * @param {string} str
   * @return {number} return 0 if str is invalid format
   * @example 1,000,000 => 1000000
   */
  toNumber(str: string): number {
    const num = Number(str.replace(/,/g, ""));
    return typeof num === "number" && isFinite(num) ? num : 0;
  }

  /**
   * Convert month and year to be date of month
   * @param {string} month
   * @param {string} year optional
   * @return {string}
   */
  dateOfMonth(month: string, year?: string): number {
    const monthInt = Number(month);
    const dayOfFeb = year && Number(year) % 4 === 0 ? 29 : 28;
    switch (monthInt) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 2:
        return dayOfFeb;
    }
    return 30;
  }
}
