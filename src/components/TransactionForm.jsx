import React, {useRef } from "react";
import { useTransactions } from "./TransactionContext";

const TransactionForm = () => {
  const { addTransaction } = useTransactions();
    let descriptionRef=useRef(null);
    let valueRef=useRef(null);

  const submitTransaction = (event) => {
    event.preventDefault();
    let description=descriptionRef.current.value;
    let value=valueRef.current.value;
    let newTransaction={description,value:Number(value)}
    addTransaction(newTransaction);

    descriptionRef.current.value="";
    valueRef.current.value="";
  };

  return (
    <form id="transaction-form" onSubmit={submitTransaction}>
      <input
        type="text"
        ref={descriptionRef}
        placeholder="Add Your Transaction"
      />
      <input
        type="number"
       ref={valueRef}
        placeholder="Add The value"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TransactionForm;