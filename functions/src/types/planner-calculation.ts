export type Output = {
    months: MonthDetail[]
};

export type MonthDetail = {
    no: string,
    carryLoanAmount: string,
    interestRate: string,
    interestAmount: string,
    installment: string,
    principleDistract: string,
    remainingLoanAmount: string
};
