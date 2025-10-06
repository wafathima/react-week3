// import {createSlice} from "@reduxjs/toolkit"
// const counterSlice = createSlice({
//     name:"counter",
//     initialState:{value:0},
//     reducers:{
//         increment:(state)=>{
//             state.value +=1;
//         },
//         decrement:(state)=>{
//             state.value -=1;
//         },
//         reset:(state)=>{
//             state.value = 0;
//         },
//     },
// });
// export const {increment,decrement,reset} = counterSlice.actions;
// export default counterSlice.reducer;

// -------refactoring🟡

// import { createSlice,configureStore} from "@reduxjs/toolkit"
// const counterSlice = createSlice({
//     name:"counter",
//     initialState:{value:0},
//     reducers:{
//         increment: (state)=>{state.value += 1},
//         decrement: (state)=>{state.value -= 1}, 
//     },
// });
// export const {increment,decrement} = counterSlice.actions;

// const store = configureStore({
//     reducer:{
//     counter: counterSlice.reducer,
//     },
// });
// export default store;

// ---------test🟡
// const initialState = {value:0};
// export const increment = () => ({type: "counter/increment"});
// export const decrement = () => ({type: "counter/decrement"})
//  function counterReducer (state = initialState, action){
//     switch (action.type){
//         case "counter/increment":
//             return {value: state.value +1};
//         case "counter/decrement":
//             return {value: state.value -1};
//         default:
//         return state;       
//     }
//  }
//  export default counterReducer;s