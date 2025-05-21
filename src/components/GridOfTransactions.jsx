
import TransactionForm from "./TransactionForm"
import TransactionList from "./TransactionList";




const TransactionGrid=()=>
{
    
return(
    <>
        <div className="transaction-container flex basis-1/3  items-center justify-center gap-40">
            <div className="form-col flex flex-1/2  justify-end">
                <TransactionForm />
            </div>

            <div className="list-col flex-1/1  h-1/2 overflow-y-scroll scrollbar-hide">
                <TransactionList/>
            </div>
        </div>
    </>
)
}

export default TransactionGrid;