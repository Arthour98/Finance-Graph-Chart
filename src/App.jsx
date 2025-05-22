
import './App.css'
import TransactionGrid from './components/GridOfTransactions';
import IncomeGrid from './components/Incomes';
import './index.css'
import GraphMonth from './components/GraphMonth';
import GraphYear from './components/GraphYear';
import './components/chart'; 
import { TransactionProvider } from "./components/TransactionContext";

function App() {


  return (
<>
<TransactionProvider>
    <div className='flex flex-col h-[75vh] lg:flex-row justify-center items-center lg:h-[50vh] text-white bg-black gap-4'>
      <IncomeGrid/>
    <TransactionGrid/>
    </div>
    <div className="flex w-full h-full flex-col  bg-black lg:flex-row lg:h-[50vh] gap-4">
      <div className="flex-1 min-w-0 bg-green-400 p-4">
      <GraphMonth/>
      </div>
            <div className="flex-1 min-w-0  bg-green-400 p-4">
      <GraphYear/>
      </div>
    </div>
    </TransactionProvider>
</>
  )
}

export default App
