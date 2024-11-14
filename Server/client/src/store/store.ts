import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import orgsSlice from "./slices/orgsSlice";
import accountSlice from "./slices/accountSlice";
import tableSlice from "./slices/tableSlice";
import defendSlice from "./slices/defendSlice";

export const store = configureStore({
    reducer: {
        orgsOps: orgsSlice.reducer,
        account: accountSlice.reducer,
        table: tableSlice.reducer,
        defend: defendSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();