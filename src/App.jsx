
import './App.css'
import TransactionGrid from './components/GridOfTransactions';
import IncomeGrid from './components/Incomes';
import './index.css'
import "./components/Graph.jsx";
import GraphGrid from './components/Graph.jsx';
import './components/chart'; 

function App() {


  return (
<>
    <div className='flex justify-center h-[50vh]   bg-sky-300 gap-4'>
      <IncomeGrid/>
    <TransactionGrid/>
    </div>
    <div className="flex h-[50vh] bg-sky-300 gap-4">
      <div className="basis-1/2 bg-amber-200 p-8">
      <GraphGrid/>
      </div>
            <div className="basis-1/2 bg-amber-200 p-8">
      <GraphGrid/>
      </div>
    </div>
</>
  )
}

export default App
