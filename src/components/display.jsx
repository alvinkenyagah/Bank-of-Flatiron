import React, { useEffect, useState } from "react";
import TransactionFilter from "./Transactionfilter";

export default function DisplayTransaction() {
  const [transactions, setTransactions] = useState([]);
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

  const handleFilter = (filteredTransactions) => {
    setFilteredTransactions(filteredTransactions);
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
      <TransactionFilter transactions={transactions} onFilter={handleFilter} />
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
