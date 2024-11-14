import {
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
  
  const initialState = "";
  
  const defendSlice = createSlice({
    name: "defend",
    initialState,
    reducers: {
      chooseMissile: (state, action: PayloadAction<string>) => {
        return action.payload
      }
    }
  });
  
  export default defendSlice;
  
  export const {chooseMissile} = defendSlice.actions
  