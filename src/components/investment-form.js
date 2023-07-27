import React, { useState } from "react";

import "./investment-form.css";

const InvestmentForm = (props) => {
  const [saving, setSaving] = useState("");
  const [contribution, setContribution] = useState("");
  const [expReturn, setExpReturn] = useState("");
  const [duration, setDuration] = useState("");

  const savingHandler = (e) => {
    setSaving(e.target.value);
  };
  const contributionHandler = (e) => {
    setContribution(e.target.value);
  };
  const returnHandler = (e) => {
    setExpReturn(e.target.value);
  };
  const durationHandler = (e) => {
    setDuration(e.target.value);
  };
  const resetHandler = (e) => {
    e.preventDefault();
    setSaving("");
    setContribution("");
    setExpReturn("");
    setDuration("");
    props.onReset([]);

  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newInvestment = {
      savings: parseFloat(saving),
      contributions: parseInt(contribution),
      exp_return: parseFloat(expReturn),
      duration: parseInt(duration),
    };
    props.onNewInvestment(newInvestment);
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={savingHandler}
              value={saving}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Contribution ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={contributionHandler}
              value={contribution}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">Expected Interest (%, per year)</label>
            <input
              type="number"
              id="expected-return"
              onChange={returnHandler}
              value={expReturn}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={durationHandler}
              value={duration}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="reset" onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className="submit">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default InvestmentForm;
