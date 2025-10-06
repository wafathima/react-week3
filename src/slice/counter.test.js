import counterReducer, {increment,decrement} from "./counterSlice";

describe ("counter reducer", ()=>{
    it("should handle increment", ()=>{
        const previousState= {value:0};
        expect (counterReducer(previousState,increment())).toEqual({value:1});
    });
    it("should handle decrement",()=>{
        const previousState = {value:2};
        expect (counterReducer(previousState,decrement())).toEqual({value:1});
    });
});