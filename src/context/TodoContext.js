import { createContext } from "react";
import { useContext } from "react";

// import { useContext } from "react";
// import { createContext } from "react";



  export const TodoContext = createContext({

    todos : [
        {
            id : 1,
            Todo : "Todo 1",
            completed  : false
        }
    ],
    
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id) =>{},
    toggleTodo : (id)=>{}
})

export const useTodo = () =>{
   return  useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider





// export const todoContext = createContext({ 
//   Todo :  [
//         {
//             id : Date.now(),
//             text : "Todo  No 1",
//             complete : false

//         }

//     ],
//     addTodo : (todo)=>{},
//     deleteTodo : (id)=>{},
//     updateTodo   : (id,Todo) =>{},
//     toggleTodo : (id)=>{},




// }) 

// export const TodoProvider = todoContext.Provider

// export const useTodo = ()=>{
//     return useContext(todoContext)
// }
