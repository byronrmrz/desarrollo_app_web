import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";
import goalReducer from "./reducers/goalsSlice";
import logger from "./middleware/logger";
import checker from "./middleware/checker";
import optionReducer from "./reducers/optionSlice";

export default configureStore({
  reducer: {
    todos: todoReducer,
    goals: goalReducer,
    option: optionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, checker),
});
