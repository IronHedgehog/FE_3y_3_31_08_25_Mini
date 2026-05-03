import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  { id: 1, completed: false, text: "Hello world!" },
  { id: 2, completed: false, text: "Веномечеинесама" },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: {
      reducer(state, action) {
        state.push(action.payload); // Можна мотувати, бо є immer
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            comleted: false,
            text,
          },
        };
      },
    },
  },
});

// export default todosSlice;

export const { addToDo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
