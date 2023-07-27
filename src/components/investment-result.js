import React, { Fragment } from "react";

import "./investment-result.css";

const InvestmentResult = (props) => {
  return (
    <Fragment>
      <tbody className="result-body">
        <tr>
          <td>{props.year}</td>
          <td>{props.savingsEndOfYear}</td>
          <td>{props.yearlyInterest}</td>
          <td>{props.totalInterest}</td>
          <td>{props.totalContribution}</td>
        </tr>
      </tbody>
    </Fragment>
  );
};

export default InvestmentResult;
