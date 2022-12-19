import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 12, 28);
  const expenseTitle = 'Fitness Membership';
  const expenseAmount = 50.00;

  
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
