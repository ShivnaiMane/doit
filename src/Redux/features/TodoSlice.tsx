import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk("todos", async () => {
  const response = await fetch("https://6794c120aad755a134ea5430.mockapi.io/todos")
  return response.json()
})

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        todo: action.payload,
        completed: false,
        important: false
      };
      state.items.push(newTodo);
    },
    toggleImpTask: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.important = !todo.important;
      }
    },
    toggleCompleteTask: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }, extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload

      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export const { addTodo, toggleImpTask, toggleCompleteTask } = todosSlice.actions;

export default todosSlice.reducer
