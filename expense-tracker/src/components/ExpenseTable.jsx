function ExpenseTable({ expenses }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>{exp.amount}</td>
            <td>${exp.category}</td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => onDelete(exp.id)}>Delete</button>
    </table>
  );
}