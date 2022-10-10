import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedReminder: null,
  modalDisplay: false,
  selectedDate: null,
};

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    add(state, action) {
      state.data.push(action.payload);
    },
    destroy: (state, action) => {
      const currentIndex = state.data.findIndex(
        ({ id }) => id === action.payload
      );
      state.data.splice(currentIndex, 1);
    },
    edit: (state, action) => {
      const currentIndex = state.data.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.data.splice(currentIndex, 1, action.payload);
    },
    selectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setCurrentReminder: (state, action) => {
      state.selectedReminder = action.payload;
    },
    toggleModalState: (state, action) => {
      state.modalDisplay = action.payload;
    },
  },
});

export const {
  add,
  destroy,
  edit,
  selectedDate,
  setCurrentReminder,
  toggleModalState,
} = reminderSlice.actions;

export default reminderSlice.reducer;
