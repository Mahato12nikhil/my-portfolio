import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import TokenSlice from "./reducers/Token";
import UserSlice from "./reducers/User";
import ProjectSlice from "./reducers/project";
import viewSlice from "./reducers/view";

export const store=configureStore({
    reducer:{
        user:UserSlice.reducer,
        token:TokenSlice.reducer,
        project:ProjectSlice.reducer,
        view: viewSlice.reducer
    }
})
export type AppDispatch=typeof store.dispatch;
type RootState=ReturnType<typeof store.getState>
export const useAppDispatch=useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
