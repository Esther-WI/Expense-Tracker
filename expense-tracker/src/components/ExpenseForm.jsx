function ExpenseForm({ onAddExpense }) {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [cat, setCat] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = {
      id: crypto.randomUUID(),
      description: desc,
      amount: parseFloat(amount),
      category: cat,
    };
    onAddExpense(newExpense);
    setDesc("");
    setAmount("");
    setCat("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Category"
        value={cat}
        onChange={(e) => setCat(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}