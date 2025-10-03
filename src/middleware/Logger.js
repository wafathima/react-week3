const Logger = store => next => action =>{
    console.log("dispatching:", action);
    console.log("previous state:", store.getState());

    const result= next (action);
    console.log("next state:", store.getState());
    return result;
};
export default Logger;