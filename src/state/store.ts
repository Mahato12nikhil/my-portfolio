import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, UseDispatch, useSelector } from "react-redux";
import TokenSlice from "./reducers/Token";
import UserSlice from "./reducers/User";

export const store=configureStore({
    reducer:{
        user:UserSlice.reducer,
        token:TokenSlice.reducer
    }
})
export type AppDispatch=typeof store.dispatch;
type RootState=ReturnType<typeof store.getState>
export const useAppDispatch=useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
