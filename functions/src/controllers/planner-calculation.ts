/* eslint-disable max-len */
import {Request, Response} from "express";
import {MonthDetail, Output} from "../types/planner-calculation";
import {Converter} from "../helpers/converter";

const converter = new Converter();

export const plannerCalculation = (req: Request, res: Response): void => {
  const {loanAmount, interestRate, installment/* , firstPayDate*/} = req.query;
  const payload: Output = <Output>{months: []};
  let remainingLoan: string = converter.toString(Number(loanAmount));

  for (let i = 1; i <= 36; i++) {
    // change var type to number
    const remainingLoanNumber = converter.toNumber(remainingLoan);
    const interestRateNumber = Number(interestRate);
    const installmentNumber = Number(installment);
    const interestAmountNumber = remainingLoanNumber * (30/365) * (interestRateNumber / 100); // interestAmount = remainingLoan * (dayOfMonth/365) * (interestRate/100)
    const principalDistractNumber = installmentNumber - interestAmountNumber;

    // assign value
    const monthDetail: MonthDetail = {
      no: i.toString(),
      carryLoanAmount: remainingLoan,
      installment: converter.toString(Number(installment)),
      interestRate: converter.toString(Number(interestRate)),
      principleDistract: converter.toString(principalDistractNumber),
      interestAmount: converter.toString(interestAmountNumber),
      remainingLoanAmount: converter.toString(remainingLoanNumber - principalDistractNumber),
    };

    remainingLoan = monthDetail.remainingLoanAmount;
    payload.months.push(monthDetail);
  }
  res.status(200).send(payload);
};
