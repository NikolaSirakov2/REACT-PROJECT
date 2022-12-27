import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const expenses = [
    {
      id: "e1",
      title: "Gym Membership",
      amount: 50.0,
      date: new Date(2022, 11, 19),
    },
    {
      id: "e2",
      title: "Pre-workout",
      amount: 25.0,
      date: new Date(2022, 11, 20),
    },
    {
      id: "e3",
      title: "Protein powder",
      amount: 40.0,
      date: new Date(2022, 11, 21),
    },
  ];

  function addExpenseHandler(expense) {
    console.log('In App.js');
    console.log(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
