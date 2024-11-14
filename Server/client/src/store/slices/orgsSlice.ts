import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { DataStatus, orgsState } from "../../types/redux";
import { IOrganizationsOptions } from "../../types/DTOs/response/fromAccount";

const baseUrl = "http://localhost:8201/account/orgs";

const initialState: orgsState = {
  error: null,
  status: DataStatus.IDLE,
  orgs: [],
};

export const fetchOrgsOptions = createAsyncThunk(
  "orgs/getOps",
  async (_, thunkApi) => {
    try {
      const orgs = (await fetch(baseUrl).then((d) =>
        d.json()
      )) as IOrganizationsOptions[];
      console.log(orgs);
      return thunkApi.fulfillWithValue(orgs);
    } catch (err) {
      thunkApi.rejectWithValue((err as Error).message);
    }
  }
);

const orgsSlice = createSlice({
  name: "orgs",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<orgsState>) => {
    builder
      .addCase(fetchOrgsOptions.pending, (state) => {
        state.status = DataStatus.LOADING;
        state.error = null;
        state.orgs = [];
      })
      .addCase(fetchOrgsOptions.fulfilled, (state, action) => {
        state.status = DataStatus.SUCCESS;
        state.error = null;
        state.orgs = action.payload as unknown as IOrganizationsOptions[];
      })
      .addCase(fetchOrgsOptions.rejected, (state, action) => {
        state.status = DataStatus.FAILED;
        state.error = action.error as string;
        state.orgs = [];
      });
  },
});

export default orgsSlice;
