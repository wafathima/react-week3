// ---simple example🛑
import store from "./store"
import React, {useEffect} from "react"
import { act } from "react"
import { combineReducers } from "redux";


function App(){
  useEffect(()=>{
    const unsubscribe =store.subscribe(()=>{
      console.log("state now", store.getState());
    });
    store.dispatch({type:"INCREMENT"});
    store.dispatch({type:"INCREMENT"});
    store.dispatch({type: "DECREMENT"})

    return unsubscribe;
  },[])
  return (
    <div>
      <h1>heyy i'm wafa here</h1>
    </div>
  )
}
export default App;

// ----------vanilla🛑
import {createStore} from "redux"
const initialState = {count:0};
 function counterReducer(state = initialState,action){
   switch (action.type){
    case "INCREMENT":
      return {count: state.count+1};
    case "DECREMENT":
      return {count: state.count-1};
    default:
      return state;  
   }
 }
 const store = createStore(counterReducer);
 store.subscribe(()=>{
  console.log("currunt state:", store.getState())
 })
 store.dispatch({type:"INCREMENT"});
 store.dispatch({type:"INCREMENT"});
 store.dispatch({type:"DECREMENT"});
export default counterReducer;


// ----------todo🛑
import React, {useState} from "react";
import {useSelector,useDispatch} from "react-redux"

function App(){
  const [task,setTask]=useState("");
  const todos= useSelector((state)=> state.todos);
  const dispatch = useDispatch();

  const addTodo =()=>{
    if (task.trim() !==""){
      dispatch ({type:"ADD_TODO", payload:task});
      setTask("");
    }
  };
  const removeTodo = (index)=>{
    dispatch ({type:"REMOVE_TODO",payload: index});
  };
  return (
    <div style={{padding:"20px"}}>
    <h2>Redux TODO list</h2>

    <input 
    value={task}
    onChange={(e)=>setTask(e.target.value)}
    placeholder="enter task here..."
    />
    <button onClick={addTodo}>Add new</button>

    <ul>
      {todos.map((todo,index)=>(
        <li key={index}>
        {todo}
        <button onClick={()=> removeTodo(index)}>Remove❌</button>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default App;

// --------reducer&action🛑
function counterReducer(state={count:0},action){
  switch (action.type){
    case "INCREMENT":
      return {count: state.count+1}
    case "DECREMENT":
      return {count:state.count-1}  
      default: 
      return state;
  }
}
let state={count:0};
console.log("initial:",state);
state= counterReducer(state,{type:"INCREMENT"});
console.log("After INCREMENT:",state);
state= counterReducer(state,{type:"DECREMENT"});
console.log("After DECREMENT:",state)

// ----------action Creator🛑
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment,decrement} from "./store"

function App(){
  const count = useSelector((state)=>state.count);
  const dispatch = useDispatch();

  return (
    <div style={{textAlign:"center", padding:"30px"}}>
      <h1>redux counter</h1>
      <h2>count: {count}</h2>
      <button onClick={()=>dispatch(increment())}>high</button>
      <button onClick={()=>dispatch(decrement())}>low</button>
    </div>
  );
}
export default App;

// --------multiReducers🛑
import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";

function App(){
  const [task,setTask]=useState("");
  const count = useSelector((state)=>state.counter.count);
  const todos = useSelector((state)=>state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div style={{padding:"20px"}}>
     <h1>redux multi-reducer example</h1>

     <h2>counr: {count}</h2>
     <button onClick={()=>dispatch({type:"INCREMENT"})}>➕</button>
     <button onClick={()=>dispatch({type:"DECREMENT"})}>➖</button>

     <hr/>

     <h2>Todo List</h2>
     <input 
     value={task}
     onChange={(e)=>setTask(e.target.value)}
     placeholder="enter task..."
     />
     <button onClick={()=> dispatch({type:"ADD_TODO",payload:task})}>Add new</button>
     <ul>
      {todos.map((todo,index)=>(
        <li key={index}>
          {todo}
          <button onClick={()=>dispatch({type:"REMOVE_TODO",payload:index})}>❌</button>
        </li>
      ))}
     </ul>
    </div>
  );
}
export default App;