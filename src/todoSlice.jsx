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
            let edititem=state.todo.find((item)=>item.id===action.payload.id)
            if(edititem){
                edititem.data=action.payload.data;
            }
        }


    }

 })
 export default todoSlice.reducer;
 export const{addtodo,deletetodo,edittodo}=todoSlice.actions