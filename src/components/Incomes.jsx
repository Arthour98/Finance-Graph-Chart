import React,{useState,useRef,useMemo}from "react";

const IncomeGrid=()=>
{
    const [income,setIncome]=useState(0);
    const incomeRef=useRef(null);
   
    const handleIncome=(e)=>
    {
        e.preventDefault();
        let newIncome=incomeRef.current.value;
        localStorage.setItem("income",JSON.stringify(newIncome));
        setIncome(newIncome);
    }

    const currIncome=useMemo(()=>
    {
     const res=localStorage.getItem("income");
     return JSON.parse(res);
    },[income]);

    return(
        <>
        <div className="container flex basis-1/3 items-center justify-center gap-8 ">
            <form className="flex gap-4 flex-col"onSubmit={handleIncome}>
                <label>
                    State montly incomes
                </label>
                <input type="number" step="any" ref={incomeRef}
                className="border rounded-sm"/>
                <input type="submit" 
                className="bg-blue-600 rounded-3xl py-2 px-4 cursor-pointer" value="submit"/>
            </form>
            <p className="font-extrabold text-3xl underline" id="income-value">Monthly Income : {currIncome}$</p>
        </div>
        </>
    )

}
export default IncomeGrid;