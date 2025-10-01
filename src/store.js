// ---simple example🛑
// import { createStore }from "redux";
// function counterReducer (state={count:0},action){
// switch (action.type){
//   case "INCREMENT":
//     return {count: state.count+1};
//   case "DECREMENT":
//     return {count: state.count-1} ;
//   default:
//     return state; 
// }
// }
// const store= createStore(counterReducer)
// export default store;

 // -------todos🛑

// const initialState={
//   todos:[]
// };
// function todoReducer(state =initialState,action){
//   switch (action.type){
//     case "ADD_TODO":
//       return{
//         ...state, todos:[...state.todos, action.payload]
//       };

//       case "REMOVE_TODO":
//         return {
//           ...state, todos: state.todos.filter((todo,index)=>index !== action.payload)
//         };

//         default:
//           return state;
//   }
// }
// const store = createStore(todoReducer);
// export default store;