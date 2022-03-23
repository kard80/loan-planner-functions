import {Request, Response} from "express";
import {maximumLoanAmount} from "../services/calculate";
import {ServicePayload} from "../types/serviceRequest";

// TODO: Clean code and move to controllers
export const maxLoanAmount = (req: Request, res: Response): void => {
  const {salary} = req.query;
  const value = maximumLoanAmount(Number(salary));
  const result: ServicePayload[] = [
    {
      label: "วงเงินกู้สูงสุด",
      key: "maxLoan",
      type: "string",
      value: value,
    },
  ];
  res.set("Access-Control-Allow-Origin", "*");
  res.send(result);
};
