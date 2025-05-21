import React,{useState,createContext,useContext,useEffect} from "react";
const TransactionContext=createContext();

export const TransactionProvider=({children})=>
{
const[transactions,setTransactions]=useState([])



useEffect(()=>
{
const savedTransactions=localStorage.getItem("transactions");
setTransactions(savedTransactions ?JSON.parse(savedTransactions):[])
},[])

const addTransaction=(transaction={id,description,value,month})=>
{
const newTransactions=[...transactions,transaction];
localStorage.setItem("transactions",JSON.stringify(newTransactions));
setTransactions(newTransactions);
}

const deleteTransaction=(transactionId)=>
{
       const  newTransactions=transactions.filter(transaction=>transaction.id!==transactionId);
       localStorage.setItem("transactions", JSON.stringify(newTransactions));
       setTransactions(newTransactions);
}



return(
    <TransactionContext.Provider value={{transactions,addTransaction,deleteTransaction}}>
     {children}
    </TransactionContext.Provider>
)}

export const useTransactions=()=>
{
   return  useContext(TransactionContext);
}