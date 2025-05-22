import React,{useState,useRef,useMemo}from "react";
import { useTransactions } from "./TransactionContext";

const IncomeGrid=()=>
{
    const {income,addIncome}=useTransactions();
    const incomeRef=useRef(null);
   
    const handleIncome=(e)=>
    {
        e.preventDefault();
        let newIncome=incomeRef.current.value;
        addIncome(newIncome);
        incomeRef.current.value="";
    }

    return(
        <>
        <div className="container flex flex-col lg:flex-row basis-1/3 items-center justify-center gap-8 ">
            <form className="flex gap-4 flex-col"onSubmit={handleIncome}>
                <label>
                    State montly incomes
                </label>
                <input type="number" step="any" ref={incomeRef}
                className="border rounded-sm"/>
                <input type="submit" 
                className="bg-blue-600 rounded-3xl py-2 px-4 cursor-pointer" value="submit"/>
            </form>
            <p className="font-extrabold text-3xl underline" id="income-value">Monthly Income : {income}$</p>
        </div>
        </>
    )

}
export default IncomeGrid;