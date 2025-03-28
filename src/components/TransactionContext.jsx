import React,{useState,createContext,useContext,useEffect} from "react";
const TransactionContext=createContext();

export const TransactionProvider=({children})=>
{
const[transactions,setTransactions]=useState(()=>
{
    const savedTransaction=localStorage.getItem("transactions");
    return savedTransaction?JSON.parse(savedTransaction):[];
});

useEffect(()=>
{
    localStorage.setItem("transactions",JSON.stringify(transactions));
},[transactions])

const addTransaction=(transaction)=>
{
setTransactions((transactions)=>[...transactions,transaction]);
}

return(
    <TransactionContext.Provider value={{transactions,addTransaction}}>
     {children}
    </TransactionContext.Provider>
)}

export const useTransactions=()=>
{
   return  useContext(TransactionContext);
}