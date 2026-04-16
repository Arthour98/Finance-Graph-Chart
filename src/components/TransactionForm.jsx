import React, { useRef } from "react";
import { useTransactions } from "./TransactionContext";

const TransactionForm = () => {
  const { addTransaction, transactions } = useTransactions();
  let descriptionRef = useRef(null);
  let valueRef = useRef(null);
  let selectRef = useRef(null);





  const submitTransaction = (event) => {

    event.preventDefault();



    let description = descriptionRef.current.value;
    let value = valueRef.current.value;
    let month = selectRef.current.value;
    let id = transactions.length > 0 ? transactions[transactions.length - 1]["id"] + 1 : 1;
    let newTransaction = { id, description, value: Number(value), month }
    addTransaction(newTransaction);
    descriptionRef.current.value = "";
    valueRef.current.value = "";
    selectRef.current, value = "";
  };

  const months = ["december", "january", "february", "march", "april",
    "may", "june", "july", "august", "semptember", "octomber", "november"];

  return (
    <form id="transaction-form" onSubmit={submitTransaction}
      className="flex flex-col justify-start gap-3 md:gap-6 py-2 md:py-4 w-full min-w-0">
      <input
        type="text"
        ref={descriptionRef}
        placeholder="Add Your Transaction"
        className="outline-blue-400 border p-2 text-sm md:text-base"
      />
      <input
        type="number"
        ref={valueRef}
        placeholder="Add The value"
        className="outline-blue-400 border p-2 text-sm md:text-base"
        step="any"
      />
      <select className="shadow-xl cursor-pointer p-2 text-sm md:text-base" ref={selectRef}>
        {months.map((month, index) => {
          return <option className="text-black" key={index} value={month}>{month}</option>
        }
        )}
      </select>
      <input type="submit" value="Submit"
        className="bg-green-300 flex self-center rounded-3xl py-2 px-6 cursor-pointer text-sm md:text-base" />
    </form>

  );
};

export default TransactionForm;