import {Request, Response} from "express";
import {HomeFeature} from "../types/home-feature";

export const homeFeature = (_req: Request, res: Response): void => {
  const result: HomeFeature[] = [
    {
      id: "maximum-loan",
      label: "วงเงินกู้สูงสุด",
      input: [
        {
          label: "เงินเดือน",
          key: "salary",
          type: "number",
          value: 0,
          required: true,
        },
      ],
      output: [
        {
          label: "เงินกู้สูงสุด",
          key: "loanAmount",
        },
      ],
      options: [],
    },
    {
      id: "planner",
      label: "คำนวณแผนการกู้",
      input: [
        {
          label: "วงเงินกู้",
          key: "loanAmount",
          type: "number",
          value: 0,
          required: true,
          options: {
            step: 100000,
            min: 0,
          },
        },
        {
          label: "อัตราดอกเบี้ยสามปีแรก",
          key: "interestRate",
          type: "number",
          value: 0,
          required: true,
          options: {
            min: 0,
          },
        },
        {
          label: "ผ่อนชำระงวดละ(บาท)",
          key: "installment",
          type: "number",
          value: 0,
          required: true,
          options: {
            step: 1000,
            min: 0,
          },
        },
      ],
      output: [
        {
          label: "เงินกู้สูงสุด",
          key: "loanAmount",
        },
      ],
      options: ["planner"],
    },
  ];
  res.send(result);
};
