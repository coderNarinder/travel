import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
 
export const toasterSlice = createSlice({
  name: '_notifications',
  initialState: {
    message:'',
     
  },
  reducers: {
    success: (state,action) => {
        state.message = action.payload;
          toast.success(state.message, {
           position: "top-center",
            className: 'toasterPosition',
            toastId: 'success1'
          });
    },
    danger: (state, action) => {
      state.message = action.payload;
        toast.warn(state.message, { 
            position: "top-center",
            className: 'toasterPosition',
            toastId: 'success1'
        });
    },
  },
});

 

export const { success, danger} = toasterSlice.actions;

export default toasterSlice.reducer;