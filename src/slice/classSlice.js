import {createSlice} from "@reduxjs/toolkit"

const initialState={
    classes :{
        byId:{
            1:{id:1, name: "class A", students: [100,101]},
            2:{id:2, name: "class B", students:[102,103,104]}
        },
        allIds:[1,2],
    },
    students:{
        byId:{
            100:{id:100, name:"diya" },
            101:{id:101, name:"janu"},
            102:{id:102, name:"joe"},
            103:{id:103, name:"mark"},
            104:{id:104, name:"jay"}
        },
        allIds:[100,101,102],
    },
};
const classSlice= createSlice({
    name:"classroom",
    initialState,
    reducers:{
        addStudent:(state,action)=>{
            const {classId, student}=action.payload;
            state.students.byId[student.id]=student;
            state.students.allIds.push(student.id);
            state.classes.byId[classId].students.push((student.id))
        },
    },
});
export const {addStudent} = classSlice.actions;
export default classSlice.reducer;