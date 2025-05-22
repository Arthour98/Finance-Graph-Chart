import {useMemo} from "react";
import Pie from "./PieChart";
import { useTransactions } from "./TransactionContext";


const GraphMonth=()=>
{
const{transactions,income,month}=useTransactions();


const labels=useMemo(()=>
{
const newLabels=[...transactions.filter(t=>t.month===month).map(t=>t.description),"income"];
return newLabels;
},[transactions,income,month]);

const values=useMemo(()=>
{
 const newValues=[...transactions.filter(t=>t.month===month).map(t=>t.value),Number(income)];
return newValues;
},[transactions,income,month]);

console.log(labels,values);
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
title:  { display:true, text: 'Transactions : Month' },
}
};

return(
    <Pie data={data} options={options} className="border border-black"/>
)

}

export default GraphMonth;
