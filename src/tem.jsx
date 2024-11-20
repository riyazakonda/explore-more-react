import { useState } from "react"

export default function Tem(){
    const [tem,setTem]=useState(11);

    const heandler=()=>{
        const newTem=tem+1;
        setTem(newTem)
    }

    const RemoveTem=()=>{
        const newTem=tem-1;
        setTem(newTem)
    }


    // add Tem function sistame
    // function heandler(){
    //     const newTem=tem+1;
    //     setTem(newTem)
    // }
    // Remove Tem function sisteme
    // function RemoveTem(){
    //     const newTem=tem-1;
    //     setTem(newTem)
    // }
    const temStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px',
        gap:'12px'
    }
    return(
        <div style={temStyle}>
            <h2>Players:{tem}</h2>
            <button onClick={heandler}>Add</button>
            <button onClick={RemoveTem}>Remove</button>
        </div>
    )
}