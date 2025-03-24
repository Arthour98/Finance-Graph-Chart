import React,{useState,createContext,useContext} from "react";
const TransactionContext=createContext();

export const TransactionProvider=({children})=>
{
const[transactions,setTransactions]=useState([]);


const addTransaction=(transaction)=>
{
setTransactions([...transactions,transaction]);
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