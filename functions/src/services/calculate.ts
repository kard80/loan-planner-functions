import {toNumberFormat} from "./format";

/**
 * Calculat maximum loan by salary
 * @param {number} salary
 * @return {number}
 */
export function maximumLoanAmount(salary: number): string {
  return toNumberFormat((salary * 0.4) * 1000000 / 5000);
}
