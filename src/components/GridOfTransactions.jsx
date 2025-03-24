import { TransactionProvider, useTransactions } from "./TransactionContext"
import TransactionForm from "./TransactionForm"
import TransactionList from "./TransactionList";




const TransactionGrid=()=>
{
    
return(
    <>
    <TransactionProvider>
        <div className="transaction-container">
            <div className="form-col">
                <TransactionForm/>
            </div>

            <div className="list-col">
                <TransactionList/>
            </div>
        </div>
    </TransactionProvider>
    </>
)
}

export default TransactionGrid;