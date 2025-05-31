import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "goals",
  initialState: {
    value: [],
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
      fetch("http://localhost:4000/goals/addGoals", {
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
    initAddGoal: (state, action) => {
      const exists = state.value.some(
        (goal) => goal._id === action.payload._id
      );
      if (!exists) {
        state.value.push(action.payload);
      }
    },
    removeGoal: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((goal) => goal._id !== id);
      fetch(`http://localhost:4000/goals/removeGoal/${id}`, {
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
export const { addGoal, removeGoal, initAddGoal } = todoSlice.actions;
export const selectGoals = (state) => state.goals.value;
export default todoSlice.reducer;
