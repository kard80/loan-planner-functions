import * as functions from "firebase-functions";
import {maximumLoanAmount} from "./services/calculate";
import {ServicePayload} from "./types/serviceRequest";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// TODO: Clean code and move to controllers
export const maxLoanAmount = functions.https.onRequest((req, res) => {
  const {salary} = req.query;
  const value = maximumLoanAmount(Number(salary));
  console.log("value: ", value);
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
});
