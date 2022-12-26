import Expenses from "./components/Expenses/Expenses";


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

  return (
    <div>
      <h2>Fitness expenses</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
