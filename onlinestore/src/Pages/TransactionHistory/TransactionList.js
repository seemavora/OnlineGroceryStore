import React from "react";

function TransactionList({ transactions }) {
  function renderTransactions() {
    return transactions.map((transaction, i) => {
      return <li key={i}>{transaction.userEmail},{ transaction.purchaseTotal}</li>;
    });
  }

  return (
    <div>
      <ul>{renderTransactions()}</ul>
    </div>
  );
}

export default TransactionList;