import { createSlice } from "@reduxjs/toolkit";

export  interface ITokenSlice{
    token:string | undefined,
    refreshToken:string | undefined
}
const initialState:ITokenSlice ={
    token:undefined,
    refreshToken:undefined
}
 const TokenSlice=createSlice({
    name:'tokenSlice',
    initialState: initialState,
    reducers:{

    }
})
export default TokenSlice;