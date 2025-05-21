import {useState,useEffect, useMemo} from "react";
import Pie from "./PieChart";


const GraphGrid=()=>
{
const[income,setIncome]=useState(0);
const [transactions,setTransactions]=useState([]);



useEffect(()=>
{
const savedIncome=localStorage.getItem("income");
const parsedIncome=savedIncome?JSON.parse(savedIncome):0;
console.log("parse income is :"+ parsedIncome)
setIncome(parsedIncome);
},[income]);


useEffect(()=>
{
const transactions=localStorage.getItem("transactions");
const parsedTransactions=transactions?JSON.parse(transactions):[];
setTransactions(parsedTransactions);
},[]);

const labels=useMemo(()=>
{
const newLabels=[...transactions.map(t=>t.description),"income"];
return newLabels;
},[transactions]);

const values=useMemo(()=>
{
const newValues=[...transactions.map(t=>t.value),income];
return newValues;
},[transactions]);


const data=useMemo(()=>
{
return {
    labels:labels,
    datasets:[{
        label:"transaction",
        data:values,
        backgroundColor:labels.map(()=>
            `rgb(${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)})`
        )
    }]
};
},[transactions]);

const options=
{
    responsive: true,
    plugins: {
      title:  { display:true, text: 'Transactions' },
    }
  };

return(
    <Pie data={data} options={options} 
    className="basis-1 flex border-1 border-black bg-amber-200"/>
)

}

export default GraphGrid;
