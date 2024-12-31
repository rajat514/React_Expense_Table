import { useState } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import ExpenseData from "./Components/expenseData";

function App() {
    const [expenses, setExpenses] = useState(ExpenseData)
    const [filterData, setFilterData] = useState(expenses)
    console.log(filterData)
    const prevAmount = ExpenseData.map(({amount}) => amount)
    let totlePrevAmount = 0
    for(let i = 0; i <= prevAmount.length - 1; i++){
        totlePrevAmount += prevAmount[i]
    }
    // console.log(totlePrevAmount)
    const [total, setTotal] = useState(totlePrevAmount)
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} setTotal={setTotal}/>
          <ExpenseTable expenses={expenses} total={total} setFilterData={setFilterData}/>
        </div>
      </main>
    </>
  );
}

export default App;
