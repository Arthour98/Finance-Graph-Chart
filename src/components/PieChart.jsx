
import {useRef,useEffect} from "react";
import "./chart";
import {Chart as ChartJS} from "chart.js";


export default function Pie({data,options})
{
    let canvasRef=useRef(null);

        useEffect(()=>{
    let canvas=canvasRef.current.getContext("2d");
    let chart =new ChartJS(canvas,
        {
            type:"pie",
            data,
            options:{responsive:true,
                maintainAspectRatio: false,
                ...options}
           
        });
        console.log(canvas)
        console.log(chart)
        
      return ()=>chart.destroy();
        },[data])

return(<canvas ref={canvasRef}
         data={data}
          options={options}
          className="w-full h-full"
/>)
    
}

