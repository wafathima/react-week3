export const fetchData=()=>{
    return async (dispatch)=>{
        dispatch({type:"FETCH_START"});

    try{
        const res= await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data= await res.json();
        dispatch({type:"FETCH_SUCCESS",payload:data});
    } 
    catch(err){
      dispatch({type:"FETCH_ERROR",payload:err});
    }   
    };
};
