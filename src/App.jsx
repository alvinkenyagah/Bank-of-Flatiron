import React from "react";
import "./App.css";
import DisplayTransaction from "./components/TransactionDisplay";
import AddTransaction from "./components/TransactionPost";

function App() {
  return (
    <>
      <h1>BANK OF FLATIRON</h1>
      <AddTransaction />
      <DisplayTransaction />
    </>
  );
}

export default App;
