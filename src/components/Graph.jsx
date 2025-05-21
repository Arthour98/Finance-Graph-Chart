import {useMemo} from "react";
import Pie from "./PieChart";
import { useTransactions } from "./TransactionContext";


const GraphGrid=()=>
{
const{transactions,income}=useTransactions();


const labels=useMemo((newLabels)=>
{
newLabels=[...transactions.map(t=>t.description),"income"];
return newLabels;
},[transactions,income]);

const values=useMemo((newValues)=>
{
 newValues=[...transactions.map(t=>t.value),Number(income)];
return newValues;
},[transactions,income]);


const data=
{
    labels:labels,
    datasets:[{
        label:"transaction",
        data:values,
        backgroundColor:labels.map((l)=>l!=="income"?
            `rgb(${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)},
            ${Math.floor(Math.random()*255)})`:`rgb(255,0,0)`
        ),
        borderColor:`cyan`,
        borderWidth:4
    }]
};


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
