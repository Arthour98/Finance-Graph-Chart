import React, { useState } from "react";
import { useTransactions } from "./TransactionContext";


const TransactionList = () => {
    const { deleteTransaction, transactions, month, selectMonth } = useTransactions();
    const months = ["all", "december", "january", "february", "march", "april",
        "may", "june", "july", "august", "semptember", "octomber", "november"];


    const handleFilter = (e) => {
        selectMonth(e.target.value);
    }
    const filteredTransactions = month ? transactions.filter(transaction => transaction.month === month) : transactions;
    console.log(month);


    return (
        <div className="min-h-[50%] max-h-[50%] border border-orange-500
         w-full flex flex-col overflow-hidden">
            <div className="sticky top-0 bg-black p-2 md:p-4 flex flex-col sm:flex-row gap-2 sm:gap-4">
                <label className="text-sm md:text-base">Select Month:</label>
                <select onInput={handleFilter}
                    className="capitalize shadow-xl cursor-pointer p-1 text-sm md:text-base">
                    {months.map((month, index) => {
                        return <option className="text-black" key={index} value={month}>{month}</option>
                    }
                    )}
                </select>
            </div>
            <div className="flex-1 w-full overflow-y-scroll scrollbar-hide">
                {/* Desktop Table View */}
                <table className="hidden md:table border-separate border-gray-600
                w-full border-spacing-y-2 md:border-spacing-y-4 table-auto shadow-md ">
                    <thead className="sticky top-0 bg-black  ">
                        <tr>
                            <th className="border border-gray-600 p-2 text-xs md:text-sm">Month</th>
                            <th className="border border-gray-600 p-2 text-xs md:text-sm">Expense-Description</th>
                            <th className="border border-gray-600 p-2 text-xs md:text-sm">Cost</th>
                            <th className="border border-gray-600 p-2 text-xs md:text-sm">Action</th>
                            <th className="border border-gray-600 p-2 text-xs md:text-sm">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.map((transaction, index) => {
                            return <tr key={index}>
                                <td className="border border-gray-800 text-center capitalize p-2 text-xs md:text-sm">
                                    <p className="font-bold">{transaction.month}</p>
                                </td>
                                <td className="border border-gray-800 text-center p-2 text-xs md:text-sm">
                                    <p className="break-words">{transaction.description}</p>
                                </td>
                                <td className="border border-gray-600 p-2 text-xs md:text-sm">
                                    <p className="text-center">{parseFloat(transaction.value)}$</p>
                                </td>
                                <td className="p-1">
                                    <div className="flex justify-center">
                                        <button className="bg-amber-500 cursor-pointer py-1 px-3 md:py-2 md:px-4 rounded-4xl text-xs md:text-sm">
                                            Inspect</button>
                                    </div>
                                </td>
                                <td className="p-1">
                                    <div className="flex justify-center">
                                        <button className="bg-red-500 cursor-pointer py-1 px-3 md:py-2 md:px-4 rounded-4xl text-xs md:text-sm"
                                            onClick={() => deleteTransaction(transaction.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-2 p-2">
                    {filteredTransactions.map((transaction, index) => {
                        return (
                            <div key={index} className="border border-gray-600 rounded-lg p-3 bg-gray-900">
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                    <div>
                                        <p className="text-xs text-gray-400">Month</p>
                                        <p className="font-bold capitalize text-sm">{transaction.month}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Cost</p>
                                        <p className="font-bold text-sm">{parseFloat(transaction.value)}$</p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <p className="text-xs text-gray-400">Description</p>
                                    <p className="text-sm break-words">{transaction.description}</p>
                                </div>
                                <div className="flex gap-2 justify-center">
                                    <button className="bg-amber-500 cursor-pointer py-1 px-3 rounded-4xl text-xs flex-1">
                                        Inspect
                                    </button>
                                    <button className="bg-red-500 cursor-pointer py-1 px-3 rounded-4xl text-xs flex-1"
                                        onClick={() => deleteTransaction(transaction.id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default TransactionList;