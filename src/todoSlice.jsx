 import{createSlice} from "@reduxjs/toolkit"

 const todoSlice=createSlice({
    name:"todos",
    initialState:{
        todo:[]
    },
    reducers:{
        addtodo:(state,action)=>{
            state.todo.push({id:Date.now(),data:action.payload})
        },
        deletetodo:(state,action)=>{
            state.todo=state.todo.filter((item)=>item.id!==action.payload)
        },
        edittodo:(state,action)=>{
            const{editid,editData}=action.payload
            let editeditem=state.todo.map((item)=>item.id===editid?{...item,data:editData}:item)
           state.todo=editeditem 
            
            
        }


    }

 })
 export default todoSlice.reducer;
 export const{addtodo,deletetodo,edittodo}=todoSlice.actions