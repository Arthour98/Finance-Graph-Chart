import { useMemo, useEffect } from "react";
import Pie from "./PieChart";
import { useTransactions } from "./TransactionContext";


const GraphMonth = () => {
    const { transactions, income, month, selTransaction } = useTransactions();


    const labels = useMemo(() => {
        if (selTransaction?.length == 0) {
            const newLabels = [...transactions.filter(t => t.month === month).map(t => t.description), "income"];
            return newLabels;
        }
        else {
            const newLabel = [selTransaction[0]?.description, "income"];
            return newLabel;
        }
    }, [transactions, income, month, selTransaction]);

    const values = useMemo(() => {
        if (selTransaction?.length == 0) {
            const newValues = [...transactions.filter(t => t.month === month).map(t => t.value), Number(income)];
            return newValues;
        }
        else {
            const newValue = [selTransaction[0]?.value, Number(income)]
            return newValue
        }
    }, [transactions, income, month, selTransaction]);

    useEffect(() => {
        console.log("selTransactioon:", selTransaction);
        console.log("labelsSSSSS:", labels);
        console.log("valuesssss:", values);
    }, [selTransaction, labels, values]);


    console.log(labels, values);
    const data =
    {
        labels: labels,
        datasets: [{
            label: "transaction",
            data: values,
            backgroundColor: labels.map((l) => l !== "income" ?
                `rgb(${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)})` : `rgb(255,0,0)`
            ),
            borderColor: `cyan`,
            borderWidth: 4
        }]
    };


    const options =
    {
        responsive: true,
        plugins: {
            title: { display: true, text: 'Transactions : Month' },
        }
    };

    return (
        <Pie data={data} options={options} className="border border-black" />
    )

}

export default GraphMonth;
