import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showLogin:false
}
const viewSlice=createSlice({
    name:"viewSlice",
    initialState,
    reducers:{
        updateLoginView:(state,action)=>{
            state.showLogin=action.payload;
        }
    }
})
export default viewSlice;
export const {updateLoginView} =viewSlice.actions;