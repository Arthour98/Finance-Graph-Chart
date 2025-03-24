import React from "react";
import { useTransactions } from "./TransactionContext";


const TransactionList=()=>
{
const {transactions}=useTransactions();

return(
    <>
    <ul>
        {transactions&&transactions.map((transaction,index)=>
        {
            return <li key={index}>{transaction.description} - {transaction.value}</li>
        })}
    </ul>
    </>
)
}
export default TransactionList;