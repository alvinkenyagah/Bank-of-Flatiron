import React from "react";

export default function SearchTransaction() {
  return (
    <form>
        <label for="Search" >Search for transaction</label>
      <input type="text" placeholder="Enter description" style={{ marginLeft: "10Px",marginBottom:"20px" }} />
      <input type="submit" value="SUBMIT" style={{ marginLeft: "5px" }} />
    </form>
  );
}
