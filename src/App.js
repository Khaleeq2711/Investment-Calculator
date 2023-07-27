import React, { useState } from "react";

import logo from "./investment-calculator-logo.png";
import "./App.css";
import InvestmentForm from "./components/investment-form";
import ResultList from "./components/result-list";

const App = () => {
  let items = [];
  const [yearlyData, setYearlyData] = useState(items);
  const [investments, setInvestments] = useState(items);

  const dataReset = (empty) => {
    setYearlyData(empty);
  };

  const newInvestmentHandler = (newData) => {
    let newInvestment = { ...newData, id: Math.random().toString() };
    setInvestments([newInvestment, ...investments]);

    let totaInterest = 0;
    let totalContribution = 0;
    for (let i = 0; i < newData.duration; i++) {
      const yearlyInterest = newData.savings * newData.exp_return;
      newData.savings += yearlyInterest + newData.contributions;
      totaInterest += yearlyInterest;
      totalContribution += newData.savings;
      items.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: newData.savings,
        yearlyContribution: newData.contributions,
        key: Math.random().toString(),
      });
    }
    const with_total = items.map((data) => {
      return {
        ...data,
        totalContribution: totalContribution,
        totaInterest: totaInterest,
      };
    });
    setYearlyData([]);
    setYearlyData(with_total);
  };

  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>
          <u>Investment Calculator</u>
        </h1>
      </header>

      <InvestmentForm
        onNewInvestment={newInvestmentHandler}
        onReset={dataReset}
      />

      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        {yearlyData?.length === 0 && <h1>No Result Yet !!</h1>}

        <ResultList yearlyData={yearlyData} />
      </table>
    </div>
  );
};

export default App;
