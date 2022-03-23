/* eslint-disable max-len */
import {Request, Response} from "express";
import {MonthDetail, Output} from "../types/planner-calculation";
import {toNumber, toString} from "../helpers/format";

export const plannerCalculation = (req: Request, res: Response): void => {
  const {loanAmount, interestRate, installment/* , firstPayDate*/} = req.query;
  const payload: Output = <Output>{months: []};
  let remainingLoan: string = toString(Number(loanAmount));

  for (let i = 1; i <= 36; i++) {
    const monthDetail: MonthDetail = <MonthDetail>{};
    monthDetail.no = i.toString();
    monthDetail.carryLoanAmount = remainingLoan;
    monthDetail.installment = toString(Number(installment));
    monthDetail.interestRate = toString(Number(interestRate));

    // change var type to number
    const remainingLoanNumber = toNumber(remainingLoan);
    const interestRateNumber = toNumber(monthDetail.interestRate);
    const installmentNumber = toNumber(monthDetail.installment);
    const interestAmountNumber = remainingLoanNumber * (30/365) * (interestRateNumber / 100); // interestAmount = remainingLoan * (dayOfMonth/365) * (interestRate/100)
    const principalDistractNumber = installmentNumber - interestAmountNumber;

    // assign value
    monthDetail.principleDistract = toString(principalDistractNumber);
    monthDetail.interestAmount = toString(interestAmountNumber);
    monthDetail.remainingLoanAmount = toString(remainingLoanNumber - principalDistractNumber);
    remainingLoan = monthDetail.remainingLoanAmount;

    payload.months.push(monthDetail);
  }
  res.status(200).send(payload);
};
