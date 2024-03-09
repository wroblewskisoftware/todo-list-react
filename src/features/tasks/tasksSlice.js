import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
    isLoading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      tasks.map((task) => (task.done = true));
    },
    fetchExampleTasks: (state) => {
      state.isLoading = true;
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    fetchExampleTasksSuccess: (state) => {
      state.isLoading = false;
    },
    fetchExampleTasksError: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export const selectLoadingState = (state) => state.tasks.isLoading;
export default tasksSlice.reducer;
