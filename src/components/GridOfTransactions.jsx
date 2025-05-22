
import TransactionForm from "./TransactionForm"
import TransactionList from "./TransactionList";




const TransactionGrid=()=>
{
    
return(
    <>
        <div className="transaction-container flex flex-col basis-1/3 shadow-2xl
         shadow-green-500 p-4 rounded-xl justify-center gap-20
         lg:flex-row">
            <div className="form-col flex flex-1/2 lg:basis-1">
                <TransactionForm/>
            </div>

            <div className="list-col flex-1/1  h-1/2 overflow-y-scroll scrollbar-hide">
                <TransactionList/>
            </div>
        </div>
    </>
)
}

export default TransactionGrid;