// ------reselect🟡
// import {createSelector} from "reselect"

// const selectClasses = (state)=>state.classes.classes;
// const selectStudents = (state)=> state.classes.students;

// export const selectAllClasses = createSelector(
//     [selectClasses],
//     (classes)=> classes.allIds.map((id)=>classes.byId[id])
// );
// export const selectStudentsByClassId = (classId)=>
//     createSelector([selectClasses,selectStudents],(classes,students)=>
//     classes.byId[classId].students.map((sid)=>students.byId[sid])
//     );

// --------selector,reselector🟡
// import { createSelector } from "reselect";
// const selectTodos = (state)=> state.todos;

// export const selectCompletedTodos = createSelector(
//     [selectTodos],
//     (todos)=> todos.filter(t=> t.done)
// );
// export const selectIncompleteCount = createSelector(
//     [selectTodos],
//     (todos)=> todos.filter(t=> !t.done).length
// );