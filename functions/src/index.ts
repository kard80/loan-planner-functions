import * as functions from "firebase-functions";
import {maximumLoanAmount} from "./services/calculate";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const maxLoanAmount = functions.https.onRequest((req, res) => {
  const {salary} = req.query;
  const result = maximumLoanAmount(Number(salary));
  res.send(result);
});
