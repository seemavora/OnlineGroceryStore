import React from 'react';
import { Table, makeStyles, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function TransactionList({ transactions }) {
  function renderTransactions() {
    return transactions.map((transaction, i) => {
      return (
        <>
          <li key={i}>
            {transaction.userEmail},{transaction.purchaseTotal}
          </li>
        </>
      );
    });
  }

  function sampleTable1() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table" minWidth="650">
          <TableHead>
            <TableRow>
              <TableCell align="center">#</TableCell>
              <TableCell align="center">Account</TableCell>
              <TableCell align="center">purchaseTotal&nbsp;($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, i) => (
              <TableRow key={i}>
                <TableCell align="center">{i + 1}</TableCell>
                <TableCell align="center">{transaction.userEmail}</TableCell>
                <TableCell align="center">{transaction.purchaseTotal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div>
      <ul>{sampleTable1()}</ul>
    </div>
  );
}

export default TransactionList;