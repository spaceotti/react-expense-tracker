import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const incomeAmounts = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount > 0);
  const totalIncome = incomeAmounts
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);
  const expenseAmounts = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount < 0);
  const totalExpense = expenseAmounts
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${totalIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${totalExpense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
