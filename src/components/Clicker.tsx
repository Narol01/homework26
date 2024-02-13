import { useState } from "react";

export default function Clicker(){

    const [state,setState]=useState<number>(0);

    const [stateS, setStateS]=useState<number>(1);

    const handlerRight=(event:React.MouseEvent):void =>{
        event.preventDefault();
        setState(state +1)
    }
    const handlerLeft=(event:React.MouseEvent):void =>{
        setState(state<=0?  0:state -1)
    }
    const hand0 =(event:React.MouseEvent):void =>{
        setState(state * 0)
    }
    const hand2 =(event:React.MouseEvent):void =>{
        setState(state * 2)
    }
    return(
    <div>
    <button onClick={()=> setState(state +stateS)}>+</button>
    <button onClick={()=>state<=0? 0:setState(state -stateS)}>-</button>
    <button onClick={handlerLeft} onContextMenu={handlerRight}>+/-</button>
    <p>{state}</p>
    <button onClick={hand0}>0</button>
    <button onClick={hand2}>удвоить</button>
    <button onClick={()=>setStateS(stateS +1) } onContextMenu={()=>setStateS(stateS -1) }>+/-</button>
    <p>Шаг увеличения = {stateS}</p>

    </div>
    );
}