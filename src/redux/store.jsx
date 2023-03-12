import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { numbersReducer } from './numberSlice';



export const store = configureStore({
  reducer:{numbers: numbersReducer,
  filters: filtersReducer,}
  
});


