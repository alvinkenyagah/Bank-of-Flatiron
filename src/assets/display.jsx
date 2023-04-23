import React, { useEffect, useState } from "react";

export default function DisplayTransaction() {
  const [transactions, setTransactions] = useState([]);

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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
      <table>
        <tr>
          <th>date</th>
          <th>description</th>
          <th>category</th>
          <th>amount</th>
        </tr>

        {transactions.map((transaction) => (
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
