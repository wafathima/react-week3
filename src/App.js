// ---simple example🛑
// import store from "./store"
// import React, {useEffect} from "react"

// function App(){
//   useEffect(()=>{
//     const unsubscribe =store.subscribe(()=>{
//       console.log("state now", store.getState());
//     });
//     store.dispatch({type:"INCREMENT"});
//     store.dispatch({type:"INCREMENT"});
//     store.dispatch({type: "DECREMENT"})

//     return unsubscribe;
//   },[])
//   return (
//     <div>
//       <h1>heyy i'm wafa here</h1>
//     </div>
//   )
// }
// export default App;

// ----------vanilla🛑
// import {createStore} from "redux"
// const initialState = {count:0};
//  function counterReducer(state = initialState,action){
//    switch (action.type){
//     case "INCREMENT":
//       return {count: state.count+1};
//     case "DECREMENT":
//       return {count: state.count-1};
//     default:
//       return state;  
//    }
//  }
//  const store = createStore(counterReducer);
//  store.subscribe(()=>{
//   console.log("currunt state:", store.getState())
//  })
//  store.dispatch({type:"INCREMENT"});
//  store.dispatch({type:"INCREMENT"});
//  store.dispatch({type:"DECREMENT"});
// export default counterReducer;


// ----------todo🛑
// import React, {useState} from "react";
// import {useSelector,useDispatch} from "react-redux"

// function App(){
//   const [task,setTask]=useState("");
//   const todos= useSelector((state)=> state.todos);
//   const dispatch = useDispatch();

//   const addTodo =()=>{
//     if (task.trim() !==""){
//       dispatch ({type:"ADD_TODO", payload:task});
//       setTask("");
//     }
//   };
//   const removeTodo = (index)=>{
//     dispatch ({type:"REMOVE_TODO",payload: index});
//   };
//   return (
//     <div style={{padding:"20px"}}>
//     <h2>Redux TODO list</h2>

//     <input 
//     value={task}
//     onChange={(e)=>setTask(e.target.value)}
//     placeholder="enter task here..."
//     />
//     <button onClick={addTodo}>Add new</button>

//     <ul>
//       {todos.map((todo,index)=>(
//         <li key={index}>
//         {todo}
//         <button onClick={()=> removeTodo(index)}>Remove❌</button>
//         </li>
//       ))}
//     </ul>
//     </div>
//   );
// }
// export default App;