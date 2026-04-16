import { useMemo, useEffect } from "react";
import Pie from "./PieChart";
import { useTransactions } from "./TransactionContext";


const GraphYear = () => {
    const { transactions, income } = useTransactions();


    const formated_transactions = useMemo(() => {
        let transactions_ref = Array.from(transactions);
        transactions_ref?.forEach((t, index) => {
            let desc = t?.description;
            let ref_obj = { ...t };
            for (let i = transactions?.length - 1; i >= index + 1; i--) {
                if (desc == transactions_ref[i]?.description) {

                    t = { ...t, value: ref_obj.value += transactions_ref[i].value }
                    transactions_ref.splice(i, 1);
                }
                else {
                    continue;
                }
            }
            transactions_ref[index] = t;
        });
        let res = transactions_ref;
        console.log("RESSSS:", res)
        return res

    }, [transactions])

    const labels = useMemo(() => {
        let res = [...formated_transactions?.map(t => t?.description), "income"]
        return res;
    }, [formated_transactions]);

    const values = useMemo(() => {
        let res = [...formated_transactions?.map(t => t.value),
        Number(income * 12)];
        return res;
    }, [formated_transactions]);


    useEffect(() => {
        console.log("transactions:", transactions)
        console.log("labels", labels)
        console.log("values", values);
    }, [transactions])


    const data =
    {
        labels: labels,
        datasets: [{
            label: "transaction",
            data: values,
            backgroundColor: labels?.map((l) => l !== "income" ?
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
            title: { display: true, text: 'Transactions : Year' },
        }
    };

    return (
        <Pie data={data} options={options} />
    )
}

export default GraphYear;
