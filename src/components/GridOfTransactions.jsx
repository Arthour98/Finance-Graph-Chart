import { TransactionProvider, useTransactions } from "./TransactionContext"
import TransactionForm from "./TransactionForm"
import TransactionList from "./TransactionList";




const TransactionGrid=()=>
{
    
return(
    <>
    <TransactionProvider>
        <div className="transaction-container flex basis-1/2 border items-center justify-center gap-40">
            <div className="form-col flex flex-1/2  justify-end">
                <TransactionForm />
            </div>

            <div className="list-col flex-1/1  h-1/2 overflow-y-scroll">
                <TransactionList/>
            </div>
        </div>
    </TransactionProvider>
    </>
)
}

export default TransactionGrid;