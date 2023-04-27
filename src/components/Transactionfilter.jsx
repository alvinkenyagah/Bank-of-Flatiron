import React, { useState } from "react";

export default function TransactionFilter({ transactions, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onFilter(
      transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <label style={{ marginRight: "10px" }}>Search description:</label>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
