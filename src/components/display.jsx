import React, { useEffect, useState } from "react";

export default function DisplayTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8001/transactions`;

    fetch(url, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = () => {
    const newFilteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(newFilteredTransactions);
  };

  return (
    <div>
      <style>
        {`
          th,
          td {
           background-color:#5b5656
          }
        `}
      </style>
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
      <table>
        <tr>
          <th>date</th>
          <th>description</th>
          <th>category</th>
          <th>amount</th>
        </tr>

        {filteredTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
