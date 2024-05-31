import { configureStore } from '@reduxjs/toolkit'
import searchTermReducer from '../slice/searchTermSlice';

export const store = configureStore({
    reducer: {
        searchTerm: searchTermReducer,
      },
})