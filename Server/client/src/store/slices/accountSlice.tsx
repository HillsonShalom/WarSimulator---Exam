import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import { accountState, DataStatus } from "../../types/redux";
  import { IGetAccount } from "../../types/DTOs/response/fromAccount";
  
  const baseUrl = "http://localhost:8201/account";
  
  const initialState: accountState = {
    error: null,
    status: DataStatus.IDLE,
    account: null,
  };
  
  export const fetchGetAccount = createAsyncThunk(
    "account/get",
    async (_, thunkApi) => {
      try {
        const token = localStorage.getItem("Authorization")
        if (!token) throw new Error("Login first!");
        const account = (await fetch(baseUrl, {
            headers: {
                "Authorization": token
            }
        }).then((d) =>
          d.json()
        )) as IGetAccount;
        console.log(account);
        return thunkApi.fulfillWithValue(account);
      } catch (err) {
        thunkApi.rejectWithValue((err as Error).message);
      }
    }
  );
  
  const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<accountState>) => {
      builder
        .addCase(fetchGetAccount.pending, (state) => {
          state.status = DataStatus.LOADING;
          state.error = null;
          state.account = null;
        })
        .addCase(fetchGetAccount.fulfilled, (state, action) => {
          state.status = DataStatus.SUCCESS;
          state.error = null;
          state.account = action.payload as unknown as IGetAccount;
        })
        .addCase(fetchGetAccount.rejected, (state, action) => {
          state.status = DataStatus.FAILED;
          state.error = action.error as string;
          state.account = null;
        });
    },
  });
  
  export default accountSlice;
  