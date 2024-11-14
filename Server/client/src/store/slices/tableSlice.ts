import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { DataStatus, tableState } from "../../types/redux";
import { ERole } from "../../types/DTOs/response/fromAccount";
import { DispatchStatus, ITableItem } from "../../types/DTOs/response/fromHistory";

const baseUrl = "http://localhost:8201/api/";

const initialState: tableState = {
  error: null,
  status: DataStatus.IDLE,
  data: [],
};


export const fetchTable = createAsyncThunk(
  "table/get",
  async (role: ERole, thunkApi) => {
    try {
      const rolePath = role === ERole.ATTAK ? "attack" : "defense";
      const token = localStorage.getItem("Authorization");
      if (!token) throw new Error("Login first!");
      let res = await fetch(baseUrl + rolePath, {
        headers: {
          Authorization: token,
        },
      }).then(d => d.json()) as ITableItem[];

      if (role === ERole.DEFENSE) {
        res = res.filter(r => r.status !== DispatchStatus.LOADED)
      }

      res = res.sort((a, b) => {
        if (!a.launchTime && !b.launchTime) return 0;
        if (!a.launchTime) return -1;
        if (!b.launchTime) return 1;
        return 0;
      })

      return thunkApi.fulfillWithValue(res)
    } catch (err) {
      thunkApi.rejectWithValue((err as Error).message);
    }
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addAttack: (state, action: PayloadAction<ITableItem>) => {
      state.data = [action.payload, ...state.data]
    },
    changeLaunch: (state, action: PayloadAction<string>) => {
      state.data.find(r => r.id === action.payload)!.status = DispatchStatus.LAUNCHED
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<tableState>) => {
    builder
      .addCase(fetchTable.pending, (state) => {
        state.status = DataStatus.LOADING;
        state.error = null;
        state.data = [];
      })
      .addCase(fetchTable.fulfilled, (state, action) => {
        state.status = DataStatus.SUCCESS;
        state.error = null;
        state.data = action.payload as unknown as ITableItem[];
      })
      .addCase(fetchTable.rejected, (state, action) => {
        state.status = DataStatus.FAILED;
        state.error = action.error as string;
        state.data = [];
      });
  },
});

export default tableSlice;

export const {addAttack, changeLaunch} = tableSlice.actions
