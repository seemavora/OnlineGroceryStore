import axios from "axios";
import React, { useEffect, useState } from "react";
import TransactionList from './TransactionList';
export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    // const transactionRes = await axios.get("http://localhost:5000/customer/");
    const transactionRes = await axios.get(
      "http://localhost:5000/transaction/"
    );
    setTransactions(transactionRes.data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      {/* <CustomerForm getTransactions={getTransactions} /> */}
      <TransactionList transactions={transactions} />
    </div>
  );
}