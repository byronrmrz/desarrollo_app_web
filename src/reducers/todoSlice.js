import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [

    ],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
      fetch("http://localhost:4000/tasks/addTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "13005169@br.gal",
        },
        body: JSON.stringify(action.payload),
      }).catch((err) => {
        console.log(err);
      });
    },
initAddTodo: (state, action) => {
  const exists = state.value.some(task => task._id === action.payload._id);
  if (!exists) {
    state.value.push(action.payload);
  }
},
removeTodo: (state, action) => {
  const id = action.payload;
  state.value = state.value.filter((task) => task._id !== id);
  fetch(`http://localhost:4000/tasks/removeTask/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "13005169@br.gal",
    },
  }).catch((err) => {
    console.log("Error al eliminar:", err);
  });
},

  },
});
export const { initAddTodo, addTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.value;
export default todoSlice.reducer;
