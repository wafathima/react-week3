const initialState={
    name:"",
    email:"",
};
export const userReducer = (state=initialState,action)=>{
    switch (action.type){
        case "SET_USER":
            return {...state, name:action.payload.name, email:action.payload.email};
        case "CLEAR_USER":
            return initialState;
            default:
                return state;    
    }
};