function todoReducer(state={todos:[]},action){
 switch (action.type){
    case "ADD_TODO":
        return {todos : [...state.todos,action.payload]};
     case "REMOVE_TODO":
        return {todos: state.todos.filter((__,i)=>i !== action.payload)};
     default :
     return state;    
 }
}
export default todoReducer;