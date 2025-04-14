import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Lunch", amount: 500, category: "Food" },
    { id: 2, description: "Transport", amount: 300, category: "Travel" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
    const [newExpense, setNewExpense] = useState({
      description: "",
      amount: "",
      category: "",
    });

    const [sortBy, setSortBy] = useState("");

    const handleAddExpense = (e) => {
      e.preventDefault();
      const newId = expenses.length ? expenses[expenses.length - 1].id + 1 : 1;
      setExpenses([...expenses, { ...newExpense, id: newId }]);
      setNewExpense({ description: "", amount: "", category: "" });
    };


  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortBy === "description") {
      return a.description.localeCompare(b.description);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "amount") {
      return a.amount - b.amount;
    }
    return 0;
  });

  function handleDelete(id) {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  }

  return (
    <div className="container">
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank" className="logo-link">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) =>
            setNewExpense({ ...newExpense, description: e.target.value })
          }
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={newExpense.category}
          onChange={(e) =>
            setNewExpense({ ...newExpense, category: e.target.value })
          }
          required
        />
        <button type="submit">Add Expense</button>
      </form>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="sort-buttons">
        <button onClick={() => setSortBy("description")}>
          Sort by Description
        </button>
        <button onClick={() => setSortBy("amount")}>Sort by Amount</button>
        <button onClick={() => setSortBy("category")}>Sort by Category</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.description}</td>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
              <td>
                <button onClick={() => handleDelete(exp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App





