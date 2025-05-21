import React,{useState} from "react";
import { useTransactions } from "./TransactionContext";


const TransactionList=()=>
{
const {deleteTransaction,transactions}=useTransactions();
const [filter,setFilter]=useState("");
const months=["december","january","february","march","april",
    "may","june","july","august","semptember","octomber","november"];
console.log(transactions)

const handleFilter=(e)=>
{
setFilter(e.target.value);
localStorage.setItem("month",JSON.stringify(e.target.value));
}
const filteredTransactions=filter?transactions.filter(transaction => transaction.month === filter):transactions;



return(
    <>
<label>Select Month:</label>
<select onChange={handleFilter}
className="ml-4 capitalize shadow-xl cursor-pointer">
    <option value="">ALL</option>
{months.map((month,index)=>
    {
        return <option key={index} value={month}>{month}</option>
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