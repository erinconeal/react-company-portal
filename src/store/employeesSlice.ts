import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CurrentUser, RandomUserAPIResponse } from "../APIResponsesTypes";

interface EmployeesState {
  entities: CurrentUser[];
  loading: boolean;
}

const initialState: EmployeesState = {
  entities: [],
  loading: false,
};

export const fetchEmployeesFromAPI = createAsyncThunk(
  "employees/fetchEmployees",
  async (): Promise<CurrentUser[]> => {
    // from https://randomuser.me/documentation
    const response = await fetch("https://randomuser.me/api/?results=17");
    const json = (await response.json()) as RandomUserAPIResponse;
    return json.results;
  }
);

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployeesFromAPI.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEmployeesFromAPI.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchEmployeesFromAPI.rejected, (state) => {
      state.loading = false;
    });
  },
});
