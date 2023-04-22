import React from "react";
import "./App.css";
import DisplayTransaction from "./assets/display";
import PostTransaction from "./assets/post";
import SearchTransaction from "./assets/search";

function App() {
  return (
    <>
      <h1>BANK OF FLATIRON</h1>
      <SearchTransaction />

      <PostTransaction />
      <DisplayTransaction />
    </>
  );
}

export default App;
