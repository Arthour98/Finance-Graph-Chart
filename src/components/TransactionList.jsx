import React,{useState} from "react";
import { useTransactions } from "./TransactionContext";


const TransactionList=()=>
{
const {deleteTransaction,transactions,month,selectMonth}=useTransactions();
const months=["all","december","january","february","march","april",
    "may","june","july","august","semptember","octomber","november"];


const handleFilter=(e)=>
{
selectMonth(e.target.value);
}
const filteredTransactions=month?transactions.filter(transaction => transaction.month === month):transactions;
console.log(month);


return(
    <>
<label>Select Month:</label>
<select onInput={handleFilter}
className="ml-4 capitalize shadow-xl cursor-pointer">
{months.map((month,index)=>
    {
        return <option className="text-black" key={index} value={month}>{month}</option>
    }
)}
</select>
    <table className="border-separate border-gray-600
     w-1/1 border-spacing-y-4 table-auto shadow-md
     ">
        <thead>
            <tr >
                <th className="border border-gray-600">Month</th>
                <th className="border border-gray-600">Expense-Description</th>
                <th className="border border-gray-600">Cost</th>
                <th className="border border-gray-600">Action</th>
                <th className="border border-gray-600">Action</th>
            </tr>
        </thead>
        <tbody>
        {filteredTransactions.map((transaction,index)=>
        {
            return <tr key={index}>
                <td className="border border-gray-800 text-center capitalize ">
                    <p className="font-bold">{transaction.month}</p>
                </td>
                <td className="border border-gray-800 ">
                    <p className="w-[20ch] break-words">{transaction.description}</p>
                </td>
                <td className="border border-gray-600">
                    <p className="text-center">{parseFloat(transaction.value)}$</p>
                    </td>
                <td className="">
                    <div className="flex justify-center">
                    <button className="bg-amber-500 cursor-pointer py-2 px-4 rounded-4xl ">Inspect</button>
                    </div>
                    </td>
                <td className=" ">
                    <div className="flex justify-center">
                    <button className="bg-red-500 cursor-pointer py-2 px-4 rounded-4xl "
                    onClick={()=>deleteTransaction(transaction.id)}>Delete</button>
                    </div>
                    </td>
            </tr>
        })}
        </tbody>
    </table>
    </>
)}
export default TransactionList;