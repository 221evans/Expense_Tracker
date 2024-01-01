import "./App.css";
import "./Components/Header.jsx";
import Header from "./Components/Header.jsx";
import Balance from "./Components/Balance.jsx";
import IncomeExpenses from "./Components/IncomeExpenses.jsx";
import TransactionList from "./Components/TransactionList.jsx";
import AddTransaction from "./Components/AddTransaction.jsx";
function App() {

  return (
    <div>
        <Header />
        <div className="container">
            <Balance />
            <IncomeExpenses />
            <TransactionList/>
            <AddTransaction />
        </div>
    </div>
  );
}

export default App
