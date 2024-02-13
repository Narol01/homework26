import { title } from "process";
import { FormEvent, useState } from "react"

export default function AddProduct() {

    type Product ={
        title:string,
        price:number,
        count:number
    };

    const [fromData, setfromData] = useState <Product>({title:"",price:0,count:0})

    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>):void =>{
        fromData["title"] =event.target.value;
        setfromData({...fromData})
        console.log(fromData)
    }

    const submitHandler =(event:React.FormEvent):void=>{
        event.preventDefault();
    }
    let [state, setState] = useState<string>("okay")

    const hide =(event:React.MouseEvent):void=>{
            event.preventDefault();
            setState(state="okay")
    }
    
    
  return (
  <div>
    <p>Форма  для добавления товаров</p>
    <form onSubmit={submitHandler}>
        <input value={fromData.title} type="text" name="title" placeholder="titler" onChange={changeHandler}/>
        <input type="text" name="title" placeholder="titler"/>
        <input type="text" name="title" placeholder="titler"/>
    </form>
    <p>{fromData.title}</p>
    <button onClick={()=>setState(state = "")} onContextMenu={hide}>Скрыть/показать содержимое</button>
    <p>{state}</p>
    
    </div>
  );
}