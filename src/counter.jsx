import { useState } from "react"

export default function Counter(){
    const  [count,setCount]=useState(0)

    const heandler=()=>{
        const newCount=count+1;
        setCount(newCount)
    }
    const heandler2=()=>{
        const newCounter=count-1;
        setCount(newCounter)
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h2>Counter:{count}</h2>
            <button onClick={heandler}>Add</button>
            <button onClick={heandler2}>Redius</button>
        </div>
    )
}