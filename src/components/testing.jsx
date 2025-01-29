import { useState } from "react";

export default function Testing(){
    const [count,setCount] =useState(0);
    return(
    
        <div className="w-full h-screen bg-gray-200 flex flex-col justify-center items-center">
            <h1 className="text-4xl">{count}</h1>


            <button className="w-[100px] h-[50px] bg-black text-white" onClick={()=>{
                const newCount = count + 1;
                setCount(newCount);
            }}>Count</button>
        </div>
    )
}