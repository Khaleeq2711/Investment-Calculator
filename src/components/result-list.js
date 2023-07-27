import React from "react";

import InvestmentResult from "./investment-result";

const ResultList = (props) => {
  return (
    props.yearlyData.map((data) => {
    return (
        <InvestmentResult
          year={data.year}
          yearlyInterest={data.yearlyInterest}
          savingsEndOfYear={data.savingsEndOfYear}
          yearlyContribution={data.yearlyContribution}
          totalInterest = {data.totaInterest}
          totalContribution={data.totalContribution}
        />
    );
  })
  )

};

export default ResultList;
