import React, { useState, useRef, useMemo } from "react";
import { useTransactions } from "./TransactionContext";

const IncomeGrid = () => {
    const { income, addIncome } = useTransactions();
    const incomeRef = useRef(null);

    const handleIncome = (e) => {
        e.preventDefault();
        let newIncome = incomeRef.current.value;
        addIncome(newIncome);
        incomeRef.current.value = "";
    }

    return (

        <div className="container min-h-[50%] flex flex-col
             lg:flex-row lg:min-h-full basis-1/2 items-center justify-center gap-8 ">
            <form className="flex gap-2 md:gap-4 flex-col w-full md:w-auto" onSubmit={handleIncome}>
                <label className="text-sm md:text-base">
                    State montly incomes
                </label>
                <input type="number" step="any" ref={incomeRef}
                    className="border rounded-sm text-sm md:text-base p-2" />
                <input type="submit"
                    className="bg-blue-600 rounded-3xl py-2 px-4 cursor-pointer text-sm md:text-base" value="submit" />
            </form>
            <p className="font-extrabold text-lg md:text-3xl underline text-center md:text-left" id="income-value">Monthly Income : {income}$</p>
        </div>

    )

}
export default IncomeGrid;