export interface Client {
  id: string;
  name: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  employmentStatus: string;
}

export interface Profile {
  clientInformation: Omit<Client, "id">;
  financials: {
    cashflow: string;
    debt: string;
    expenses: string;
    income: string;
    investment: string;
    networth: string;
    savings: string;
  };
  goals: {
    emergencyFund: string;
    travel: string;
  };
  insurances: {
    lifeInsurance: string;
    personalAccident: string;
  };
}
