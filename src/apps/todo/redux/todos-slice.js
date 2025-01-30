import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  "toDos":[],
  "filteredValue": "default"
}

const toDosSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    update:  (state, action)=>{ // toDo obj
      state.toDos = state.toDos.map(todo=>{
        if (todo.id === action.payload.id){
          return action.payload;
        }
        return todo;
      })
    },
    set: (state, action)=>{ // toDos list
      state.toDos = action.payload
    },
    add: (state, action)=>{ // todo object
      state.toDos.push(action.payload);
    },
    remove: (state, action)=>{ //id
      state.toDos = state.toDos.filter(action.payload);
    },
    clear: (state, action)=>{
      state.toDos = [];
    },
    completedToggle : (state, action) => { //id
      const updatedTodos = state.toDos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      state.toDos = updatedTodos;
    },
    updateFilteredValue: (state, action)=>{ //filteredValue
      state.filteredValue = action.payload; 
    }
  }
});


export const {add, remove, clear, update, set, updateFilteredValue, completedToggle} = toDosSlice.actions;
export default toDosSlice.reducer;