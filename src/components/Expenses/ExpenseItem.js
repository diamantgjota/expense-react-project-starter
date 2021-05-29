import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <Card className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">$12.99</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
