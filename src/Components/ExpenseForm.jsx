import { useState } from "react"


export default function ExpenseForm({setExpenses,setTotal}) {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const handleExpense = (e) => {
        e.preventDefault()
        const expense = {title,category,amount,id:crypto.randomUUID()}
        setTotal((prevState) => +prevState + +amount)
        setExpenses((prevState) => [...prevState, expense])
        setTitle('')
        setCategory('')
        setAmount('')
        // setExpenses((prevState) => [
        //     ...prevState,
        //     {...getFormData(e.target), id: crypto.randomUUID()}
        // ])
        // e.target.reset()
    }

    // const getFormData = (form) => {
    //     const formData = new FormData(form)
    //     const data = {}
    //     for(const [key, value] of formData.entries()){
    //         data[key] = value
    //     }
    //     console.log(data)
    //     return data
    // }
    return (
        <form className="expense-form" onSubmit={handleExpense}>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="category">Category</label>
            {/* <input  /> */}
            <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="" hidden>Select Category</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Bills">Bills</option>
                  <option value="Education">Education</option>
                  <option value="Medicine">Medicine</option>
                </select>
          </div>
          <div className="input-container">
            <label htmlFor="amount">Amount</label>
            <input id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          </div>
          <button className="add-btn">Add</button>
        </form>
    )
}