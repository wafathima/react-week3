// // ----------useSelector🛑useDispatch🛑----------
// import {createStore} from "redux"
// import counterReducer from "./counterReducer"
// const store= createStore(counterReducer)
// export default store;

// // ---simple example🛑
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

// //  -------todos🛑
// import { createStore }from "redux";
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

// // ------------actions creator🛑
// import {createStore} from "redux"
// const INCREMENT ="INCREMENT"
// const DECREMENT = "DECREMENT"

// export function increment(){
//   return {type:INCREMENT}
// }
// export function decrement(){
//   return {type:DECREMENT}
// }
// function counterReducer(state={count:0},action){
//   switch (action.type){
//     case INCREMENT:
//       return {count: state.count+5}
  
//   case DECREMENT:
//     return {count: state.count-5}
//     default :
//     return state;
// }
// }
// const store = createStore(counterReducer)
// export default store;

// // --------- multireducer🛑
// import {composeWithDevTools} from "redux-devtools-extension";
// import {createStore, combineReducers} from "redux";
// import counterReducer from "./counterReducer";
// import todoReducer from "./reducers/todoReducer";

// const rootReducer=combineReducers({
//     counter: counterReducer,
//     todo: todoReducer,
// });
// const store = createStore(rootReducer,composeWithDevTools());
// export default store;

// // -------middleware🛑
// import {createStore, applyMiddleware} from "redux";
// // import rootReducer from "./reducers";
// import Logger from "./middleware/Logger";
// import counterReducer from "./counterReducer";
// const store = createStore(
//     counterReducer,
//     applyMiddleware(Logger)
// );
// export default store;

// // ----------async🟡thunk🛑
import {createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import rootReducer from "./reducers"

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

// // --------connect reduce🛑
// import {createStore} from "redux";
// import { userReducer } from "./reducers/userReducer";

// export const store= createStore(
//     userReducer

// );
// export default store;


