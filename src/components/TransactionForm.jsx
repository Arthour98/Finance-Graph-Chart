import React, {useRef } from "react";
import { useTransactions } from "./TransactionContext";

const TransactionForm = () => {
  const { addTransaction } = useTransactions();
    let descriptionRef=useRef(null);
    let valueRef=useRef(null);
    let selectRef=useRef(null);

  const submitTransaction = (event) => {
    event.preventDefault();
    let description=descriptionRef.current.value;
    let value=valueRef.current.value;
    let month=selectRef.current.value;
    let newTransaction={description,value:Number(value),month}
    addTransaction(newTransaction);

    descriptionRef.current.value="";
    valueRef.current.value="";
    selectRef.current,value="";
  };

    const months=["december","january","february","march","april",
      "may","june","july","august","semptember","octomber","november"];

  return (
    <form id="transaction-form" onSubmit={submitTransaction}
    className="flex flex-col gap-10 basis-1/2 py-4 ">
      <input
        type="text"
        ref={descriptionRef}
        placeholder="Add Your Transaction"
        className="outline-blue-400 border"
      />
      <input
        type="number"
       ref={valueRef}
        placeholder="Add The value"
        className="outline-blue-400 border"
        step="any"
      />
      <select ref={selectRef}>
        {months.map((month,index)=>
          {
           return <option key={index} value={month}>{month}</option>
          }
        )}
      </select>
      <input type="submit" value="Submit"
      className="bg-green-300 flex w-1/2 self-center rounded-3xl py-1 cursor-pointer "/>
    </form>

  );
};

export default TransactionForm;