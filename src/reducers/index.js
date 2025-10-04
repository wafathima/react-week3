// import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";

// const rootReducer = combineReducers({
//     count : counterReducer,
// });
// export default rootReducer;

// -------async🟡thunk🛑
import { combineReducers } from 'redux';
import thunkReducer from './thunkReducer';

const rootReducer = combineReducers({
  thunk:thunkReducer,
});
export default rootReducer;