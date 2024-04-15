import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputsList: [],
};

const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.inputsList.push(action.payload);
    },
    deleteInput: (state, action) => {
      state.inputsList.splice(action.payload, 1);
    },
    editInput: (state, action) => {
      const { index, value } = action.payload;
      // Correctly handle the update using Immer
      if (index >= 0 && index < state.inputsList.length) {
        state.inputsList[index] = value;
      }
    }
  },
});

// Export the actions
export const { addInput, deleteInput, editInput } = inputsSlice.actions;

// Export the reducer
export default inputsSlice.reducer;
