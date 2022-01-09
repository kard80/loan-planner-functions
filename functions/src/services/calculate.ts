import {toNumberFormat} from "./format";

/**
 * Calculat maximum loan by salary
 * @param {number} salary
 * @return {number}
 */
export function maximumLoanAmount(salary: number): string {
  if (!salary) {
    return "0.00";
  }
  return toNumberFormat((salary * 0.4) * 1000000 / 4350);
}
