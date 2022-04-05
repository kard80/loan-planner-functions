import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import {maxLoanAmount} from "./controllers/loan-amount";
import {plannerCalculation} from "./controllers/planner-calculation";

const app = express();

// CORS config
// const origins = "*"; 'https://loan-planning-app.web.app', 'http://localhost:3000
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // TODO: Implement origins
    if (origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));
// app.use(cors()); // only test purpose

app.get("/", (_req, res) => res.status(200).send("Hello World"));
app.get("/maxLoanAmount", maxLoanAmount);
app.get("/plannerCalculation", plannerCalculation); // http://localhost:5001/loan-planning-app/us-central1/app/plannerCalculation?loanAmount=3000000&interestRate=3&installment=12500

exports.app = functions.https.onRequest(app);
