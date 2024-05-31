import { createSlice } from '@reduxjs/toolkit';

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    setSearchTerm: (state, action) => {
      console.log("State", state)
      console.log("Action", action)
      return action.payload
    }
  },
});

export const { setSearchTerm } = searchTermSlice.actions;

export default searchTermSlice.reducer;