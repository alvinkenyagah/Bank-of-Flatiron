import React, { useEffect, useState } from "react";
import TransactionFilter from "./Transactionfilter";
import TransactionDelete from "./TransactionDelete";

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

  const handleDelete = (id) => {
    const url = `http://localhost:8001/transactions/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then(() => {
        const newTransactions = transactions.filter(
          (transaction) => transaction.id !== id
        );
        setTransactions(newTransactions);
        setFilteredTransactions(newTransactions);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <style>
        {`
          th,
          td {
            background-color: #5b5656;
          }
        `}
      </style>
      <TransactionFilter transactions={transactions} onFilter={handleFilter} />
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>description</th>
            <th>category</th>
            <th>amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <TransactionDelete
                  id={transaction.id}
                  onDelete={() => handleDelete(transaction.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
