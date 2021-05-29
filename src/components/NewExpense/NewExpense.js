import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <button type="button">Add Expense</button>

      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
