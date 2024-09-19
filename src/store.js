 
import loaderReducer from './reducers/loaderSlice'; 
import toasterSlice from './reducers/toasterSlice';
import { configureStore } from '@reduxjs/toolkit';
export default configureStore({
  reducer: { 
    loader: loaderReducer,
    _notifications:toasterSlice
  },
});