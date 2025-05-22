import {useMemo} from "react";
import Pie from "./PieChart";
import { useTransactions } from "./TransactionContext";


const GraphYear=()=>
{
const{transactions,income}=useTransactions();


const labels=
[...transactions.map(t=>t.description),"income"];


const values=
[...transactions.map(t=>t.value),Number(income*12)];



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
title:  { display:true, text: 'Transactions : Year' },
}
};

return(
    <Pie data={data} options={options} />
)
}

export default GraphYear;
