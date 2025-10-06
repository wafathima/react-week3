// import {createSlice} from "@reduxjs/toolkit";
// const todosSlice = createSlice({
//     name:"todos",
//     initialState:[
//         {id: 1, text: "Learn Redux",done: true},
//         {id: 2, text: "Build project",done: true},
//         {id: 3, text: "use Reselect",done: false},
//     ],
//     reducers:{
//         toggleTodo:(state,action)=>{
//             const todo = state.find(t=> t.id === action.payload);
//             if(todo) todo.done = !todo.done;
//         },
//     },
// });
// export const {toggleTodo} = todosSlice.actions;
// export default todosSlice.reducer;

// ---------project🔴🟡🟢
// import {createSlice} from "@reduxjs/toolkit"
// const initialState ={
//     todos:[],
// };

// const todoSlice = createSlice({
//     name:"todo",
//     initialState,
//     reducers:{
//         addTodo:(state,action)=>{
//             state.todos.push({
//                 id: Date.now(),
//                 text: action.payload,
//             });
//         },
//         deleteTodo: (state,action)=>{
//             state.todos= state.todos.filter(todo=> todo.id !== action.payload);
//         },
//         updateTodo:(state,action)=>{
//             const {id,text} = action.payload;
//             const todo = state.todos.find(todo=> todo.id===id);
//             if(todo){
//                 todo.text =text;
//             } 
//         },
//     },
// });
// export const {addTodo, deleteTodo,updateTodo} = todoSlice.actions;
// export default todoSlice.reducer;