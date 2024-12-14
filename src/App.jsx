import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import{useDispatch} from "react-redux";

function App() {
  const dispatch=useDispatch()

  const[data,setData]=useState("")





  return (
    <>
    <div>
      <input value={data} type="text" onChange={(e)=>setData(e.target.value)}/>
      <button onClick={()=>{dispatch(addtodo(data));setData("")}}>add</button>

    </div>
    <ul>
      {todos?.map((todo)=>{
        <li>
          
        </li>

      })}
    </ul>
      
       
    </>
  )
}

export default App
