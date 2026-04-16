
import TransactionForm from "./TransactionForm"
import TransactionList from "./TransactionList";




const TransactionGrid = () => {

    return (

        <div className="transaction-container flex flex-col 
         basis-1 shadow-2xl shadow-green-500 p-2 md:p-4 rounded-xl justify-center
          gap-2 md:gap-4 lg:min-h-[50%] lg:flex-row lg:justify-center min-w-0"
        >
            <div className="form-col flex flex-1 lg:flex-1 min-w-[25%]">
                <TransactionForm />
            </div>

            <div className="list-col flex-1 lg:flex-1 overflow-hidden
              min-w-[75%] max-h-[50%] ">
                <TransactionList />
            </div>
        </div>

    )
}

export default TransactionGrid;