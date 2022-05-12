import { createSlice } from "@reduxjs/toolkit";
import { department, position, zone, employee, admin } from "./data";
const initialState = {
  department,
  position,
  zone,
  employee,
  admin,
};
console.log(initialState);
export const DataSlice = createSlice({
  name: "systemData",
  initialState: initialState,
  reducers: {
    adminSignIn: (state, action) => {
      const result = state.admin.some((data) => {
        return (
          data.name === action.payload.username &&
          data.password === action.payload.password
        );
      });
      const fetchData = state.admin.some((data) => {
        return (
          data.name === action.payload.username &&
          data.password === action.payload.password
        );
      });
      return { ...state, result };
    },
   
    },
  
});

// Action creators are generated for each case reducer function
export const { adminSignIn } = DataSlice.actions;

export default DataSlice.reducer;
