import React from "react";

import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";
const ExpensesList = () => {
  return (
    <ul className="expenses-list">
      <ExpenseItem />
    </ul>
  );
};

export default ExpensesList;
