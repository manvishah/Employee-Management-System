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
      return { ...state, result };
    },

    employeeSignIn: (state, action) => {
      console.log(action.payload);
      const result = state.employee.filter((data) => {
        return (
          data.name === action.payload.username &&
          data.password === action.payload.password
        );
      });
      console.log(result);
      localStorage.setItem("employee", JSON.stringify({ ...state, result }));
      return { ...state, result };
    },

    addEmployee: (state, action) => {
      const empId = state.employee.map((a) => a.employeeId);
      const lastEmpId = Math.max(...empId);
      console.log(lastEmpId, action);
      const { username, password, department, position, zone } = action.payload;
      const newEmployee = {
        employeeId: lastEmpId + 1,
        name: username,
        password,
        department,
        position,
        zone,
      };
      state.employee.push(newEmployee);
      localStorage.setItem("employee", JSON.stringify(state));
    },

    editEmployee: (state, action) => {
      console.log(action.payload);

      const editedEmployee = state.employee.map((emp) => {
        return emp.employeeId == action.payload.employeeId
          ? action.payload
          : emp;
      });
      console.log(editedEmployee);
      state.employee = editedEmployee;
      // state.edited=true;
      localStorage.setItem("employee", JSON.stringify(state));
    },

    deleteEmployee: (state, action) => {
      const newEmp = state.employee.filter((emp) => {
        return emp.employeeId !== action.payload;
      });
      console.log(newEmp, action.payload);
      state.employee = newEmp;
      localStorage.setItem("employee", JSON.stringify(state));
    },

    fetchAllData: (state, action) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  adminSignIn,
  employeeSignIn,
  addEmployee,
  deleteEmployee,
  fetchAllData,
  editEmployee,
} = DataSlice.actions;

export default DataSlice.reducer;
