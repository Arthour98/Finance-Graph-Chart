
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
    <TransactionProvider>
      <div className="min-h-[100vh] max-h-[100%] h-[100vh]
      min-w-full max-w-full w-full bg-black flex flex-col overflow-hidden">
        <div className="flex-1 min-h-[50%] max-h-[50%]
         flex flex-col border border-red-500 lg:flex-row 
        gap-2 md:gap-4 p-2 md:p-4 text-white ">
          <div className="flex-1 min-w-[50%] flex-shrink-1">
            <IncomeGrid />
          </div>
          <div className="flex-1 min-w-[50%] flex-shrink-1 overflow-hidden">
            <TransactionGrid />
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:flex-row gap-2 md:gap-4 p-2 md:p-4 min-h-0">
          <div className="flex-1 bg-green-400 rounded-lg p-2 md:p-4 min-h-0">
            <GraphMonth />
          </div>
          <div className="flex-1 bg-green-400 rounded-lg p-2 md:p-4 min-h-0">
            <GraphYear />
          </div>
        </div>
      </div>
    </TransactionProvider>

  )
}

export default App
