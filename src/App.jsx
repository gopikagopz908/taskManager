import { useState } from 'react'

import{useDispatch, useSelector} from "react-redux";
import { addtodo, deletetodo, edittodo } from './todoSlice';

function App() {
  const dispatch=useDispatch()

  const[data,setData]=useState("")
  const[editid,setId]=useState("")
  const[editData,setEditdata]=useState("")
 
const todos=useSelector(state=>state.todo.todo)
  return (
    <>
    <div>
      <input value={data} type="text" onChange={(e)=>setData(e.target.value)}/>
      <button onClick={()=>{dispatch(addtodo(data));setData("")}}>add</button>
      

    </div>
    <ul>
      {todos?.map((todo)=>(
        <li key={todo.id}>
          {todo.data}
          <button onClick={()=>{dispatch(deletetodo(todo.id))}}>delete</button>
          <button  onClick={()=>setId(todo.id)}>edit</button>
        { editid===todo.id && <><input type="text"  onChange={(e)=>setEditdata(e.target.value)} />  <button onClick={()=>dispatch(edittodo({editid,editData}))}>save</button></>
        }

          


        
        </li>

      ))}
    </ul>
      
       
    </>
  )
}

export default App
