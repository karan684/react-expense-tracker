import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [entertedTitle, setEnteredTitle] = useState("");
  const [entertedAmount, setEnteredAmount] = useState("");
  const [entertedDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandle = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandle = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entertedTitle,
      amount: +entertedAmount,
      date: new Date(entertedDate),
    };
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entertedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={entertedAmount}
            onChange={amountChangeHandle}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={entertedDate}
            onChange={dateChangeHandle}
          />
        </div>
        <div className="actions">
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
