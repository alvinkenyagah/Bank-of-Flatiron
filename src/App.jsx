import React from "react";
import "./App.css";
import DisplayTransaction from "./components/display";
import AddTransaction from "./components/post";

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
