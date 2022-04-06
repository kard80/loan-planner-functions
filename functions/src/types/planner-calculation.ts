export type Output = {
    months: MonthDetail[]
};

export type MonthDetail = {
    no: string,
    carryLoanAmount: string,
    dayOfMonth: string,
    interestRate: string,
    interestAmount: string,
    installment: string,
    principleDistract: string,
    remainingLoanAmount: string
};
