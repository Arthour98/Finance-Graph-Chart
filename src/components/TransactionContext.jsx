import React,{useState,createContext,useContext,useEffect} from "react";
const TransactionContext=createContext();

export const TransactionProvider=({children})=>
{
const[transactions,setTransactions]=useState([])
const [income,setIncome]=useState("");
const [month,setMonth]=useState("");

useEffect(()=>
{
const savedTransactions=localStorage.getItem("transactions");
setTransactions(savedTransactions ?JSON.parse(savedTransactions):[])
},[]);

useEffect(()=>
{
const fetchedIncome=localStorage.getItem("income");
const newIncome=JSON.parse(fetchedIncome);
setIncome(newIncome);
},[]);

const selectMonth=(newMonth)=>
{
setMonth(newMonth);
}

const addIncome=(newIncome)=>
{
localStorage.setItem("income",JSON.stringify(newIncome));
setIncome(newIncome);
}

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
    <TransactionContext.Provider value=
    {{transactions,addTransaction,deleteTransaction,
    income,addIncome,month,selectMonth}}>
    {children}
    </TransactionContext.Provider>
)}

export const useTransactions=()=>
{
   return  useContext(TransactionContext);
}