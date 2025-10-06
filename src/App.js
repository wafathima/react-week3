// // ----------useSelector🛑useDispatch🛑----------
// import React from "react";
// import { useSelector, useDispatch,} from "react-redux";

// function App(){
//     const count = useSelector((state)=>state.count)
//     const dispatch=useDispatch();

//     return(
//         <div style={{textAlign:"center", marginTop:"20px"}}>
//           <h1>count: {count}</h1> 
//           <button onClick={()=>dispatch({type:"INCREMENT"})}>➕</button> 
//           <button onClick={()=>dispatch({type:"DECREMENT"})}>➖</button>
//         </div>
//     )
// }
// export default App;

// // ---simple example🛑
// import store from "./store"
// import React, {useEffect} from "react"
// import { act } from "react"
// import { combineReducers } from "redux";

// function App(){
//   useEffect(()=>{
//     const unsubscribe =store.subscribe(()=>{
//       console.log("state now", store.getState());
//     });
//     store.dispatch({type:"INCREMENT"});
//     store.dispatch({type:"INCREMENT"});
//     store.dispatch({type: "DECREMENT"});

//     return unsubscribe;
//   },[])
//   return (
//     <div>
//       <h1>heyy i'm wafa </h1>
//     </div>
//   )
// }
// export default App;

// // ----------vanilla🛑
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


// // // ----------todo🛑
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

// // --------reducer&action🛑
// function counterReducer(state={count:0},action){
//   switch (action.type){
//     case "INCREMENT":
//       return {count: state.count+1}
//     case "DECREMENT":
//       return {count:state.count-1}  
//       default: 
//       return state;
//   }
// }
// let state={count:0};
// console.log("initial:",state);
// state= counterReducer(state,{type:"INCREMENT"});
// console.log("After INCREMENT:",state);
// state= counterReducer(state,{type:"DECREMENT"});
// console.log("After DECREMENT:",state)

// // ----------action Creator🛑
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {increment,decrement} from "./store"

// function App(){
//   const count = useSelector((state)=>state.count);
//   const dispatch = useDispatch();

//   return (
//     <div style={{textAlign:"center", padding:"30px"}}>
//       <h1>redux counter</h1>
//       <h2>count: {count}</h2>
//       <button onClick={()=>dispatch(increment())}>high</button>
//       <button onClick={()=>dispatch(decrement())}>low</button>
//     </div>
//   );
// }
// export default App;

// // --------multiReducers🛑
// import React,{useState} from "react";
// import { useSelector,useDispatch } from "react-redux";

// function App(){
//   const [task,setTask]=useState("");
//   const count = useSelector((state)=>state.counter.count);
//   const todos = useSelector((state)=>state.todo.todos);
//   const dispatch = useDispatch();
//   return (
//     <div style={{padding:"20px"}}>
//      <h1>redux multi-reducer example</h1>

//      <h2>counr: {count}</h2>
//      <button onClick={()=>dispatch({type:"INCREMENT"})}>➕</button>
//      <button onClick={()=>dispatch({type:"DECREMENT"})}>➖</button>

//      <hr/>

//      <h2>Todo List</h2>
//      <input 
//      value={task}
//      onChange={(e)=>setTask(e.target.value)}
//      placeholder="enter task..."
//      />
//      <button onClick={()=> dispatch({type:"ADD_TODO",payload:task})}>Add new</button>
//      <ul>
//       {todos.map((todo,index)=>(
//         <li key={index}>
//           {todo}
//           <button onClick={()=>dispatch({type:"REMOVE_TODO",payload:index})}>❌</button>
//         </li>
//       ))}
//      </ul>
//     </div>
//   );
// }
// export default App;

// ------middleware🛑

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// function App(){
//   const count= useSelector(state=>state.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={()=> dispatch({type:"INCREMENT"})}> increment+</button>
//       <button onClick={()=>dispatch({type:"DECREMENT"})}>decrement-</button>
//     </div>
//   )
// }
// export default App;

// --------async🟡thunk🛑
// import React, {useEffect} from "react";
// import {useSelector,useDispatch,} from "react-redux"
// import {fetchData} from "./action";

// function App(){
//   const dispatch = useDispatch();
//   const {loading, data, error}=useSelector((state)=>state.thunk);

//   useEffect(()=>{
//     dispatch(fetchData());
//   },[dispatch]);

//   return (
//     <div style={{marginLeft:"15px"}}>
//       <h1>async example</h1>
//       {loading && <h2>loading...</h2>}
//       {error && <h3>error: {error.message}</h3>}
//       {data && (
//         <div>
//           <h4>fetched post</h4>
//           <pre>{JSON.stringify(data,null,2)}</pre> 
//           </div>
//       )}
//    </div>
//   );
// }
// export default App;

// --------connect reducers🛑
// import React from "react";
// import {useSelector,useDispatch} from "react-redux";

// function App(){
//   const user= useSelector((state)=>state);
//   const dispatch = useDispatch();

//   const setUser = ()=>{
//     dispatch ({
//       type:"SET_USER",
//       payload:{name:"wafa", email:"wafa@gmail.com"},
//     });
//   };
//   const clearUser =()=>{
//     dispatch ({type:"CLEAR_USER"});
//   };
//   return (
//     <div style={{textAlign:"center", marginTop:"50px"}}>
//       <h2>user info</h2>
//       <p>name:{user.name}</p>
//       <p>email:{user.email}</p>
//       <button onClick={setUser}>Set user</button>
//       <button onClick={clearUser}>Clear user</button>
//     </div>
//   )
// }
// export default App;

// reselect&select🟡
// import React from "react";
// import {useSelector} from "react-redux"
// import { selectAllClasses, selectStudentsByClassId } from "./selector";

// function App(){
//     const classes = useSelector(selectAllClasses);
//     const studentsInClass1 = useSelector(selectStudentsByClassId(2));

//     return (
//         <div style={{margin:"20px"}}>
//             <h1>classes</h1>
//               {classes.map((cls)=>(
//                 <h3 key={cls.id}>{cls.name}</h3>
//               ))}

//               <h3>student in class B</h3>
//               {studentsInClass1.map((s)=>(
//                 <p key={s.id}>{s.name}</p>
//               ))}
//         </div>
//     )
// }
// export default App;

// ----------redux toolkit counter🟡

// import {useSelector, useDispatch} from "react-redux"
// import { increment,decrement,reset } from "./slice/counterSlice"

// function App(){
//     const count = useSelector((state)=>state.counter.value)
//     const dispatch = useDispatch();

//     return (
//         <div style={{margin:"30px"}}>
//            <h1>Redux toolkit counter Example</h1>
//            <h3>count🚀: {count}</h3> 
//            <button onClick={()=>dispatch(increment())}>➕</button>
//            <button onClick={()=>dispatch(decrement())}>➖</button>
//            <button onClick={()=>dispatch(reset())}>Reset</button>

//         </div>
//     )
// }
// export default App;

// ---------------refactoring🟡
// import React from "react";
// import {useSelector, useDispatch} from "react-redux";
// import { increment, decrement} from "./slice/counterSlice";

// function App(){
//     const count = useSelector((state)=>state.counter.value);
//     const dispatch = useDispatch();

//     return (
//         <div style={{margin:"27px", backgroundColor:"red", padding:"20px"}}>
//          <h1>count: {count}</h1>
//             <button onClick={()=>dispatch(increment())}>+</button>
//             <button onClick={()=>dispatch(decrement())}>-</button>
//          </div>
        
//     );
// }
// export default App;

// --------selector,reselector🟡
// import React from "react";
// import {useSelector} from "react-redux"
// import { selectCompletedTodos, selectIncompleteCount } from "./selector";

// function App(){
//     const completed = useSelector(selectCompletedTodos);
//     const incompleteCount = useSelector(selectIncompleteCount)

//     return (
//         <div style={{margin:"27px"}}>
//             <h2>Completed Todos:</h2>
//             <ul>
//                 {completed.map(todo=> <li key={todo.id}>{todo.text}</li>)}
//             </ul>

//             <h3>Incompleted Todos: {incompleteCount}</h3>

//         </div>
//     );
// }
// export default App;

// --------project🔴🟡🟢
// import React, {useState} from "react";
// import {useSelector , useDispatch} from "react-redux";
// import { addTodo, deleteTodo, updateTodo } from "./slice/todosSlice";

// function App(){
//     const [input,setInput] =useState("");
//     const [editId,setEditId] =useState(null);
//     const [editText, setEditText] = useState("");

//     const todos = useSelector((state)=> state.todo.todos);
//     const dispatch = useDispatch();

//     const handleAdd =()=>{
//         if (input.trim() === "") return;
//         dispatch(addTodo(input));
//         setInput("");
//     };
//     const handleUpdate = (id) => {
//         if (editText.trim() === "") return;
//         dispatch(updateTodo({id,text:editText}));
//         setEditId(null);
//         setEditText("");
//     };
//     return (
//         <div style={{padding:"20px", maxWidth:"500px", margin:"auto"}}>
//             <h1>Redux Todo App</h1>
//             <input
//             type="text"
//             value={input} 
//             placeholder="Enter task..."
//             onChange={(e)=> setInput(e.target.value)}
//             />
//             <button onClick={handleAdd}>Add</button>
//             <ul>
//                 {todos.map((todo) => (
//                     <li key={todo.id} style={{margin:"10px 0"}}>
//                         {editId === todo.id ? (
//                             <>
//                             <input
//                              type="text"
//                              value={editText}
//                              onChange= {(e)=> setEditText(e.target.value)}
//                             />
//                             <button onClick={()=> handleUpdate(todo.id)}>save</button>
//                             </>
//                         ):(
//                             <>
//                             {todo.text}{""}
//                             <button onClick={()=>{setEditId(todo.id); setEditText(todo.text);}}>
//                                 Edit
//                             </button>
//                             <button onClick={()=> dispatch(deleteTodo(todo.id))}>Delete</button>
//                             </>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default App;