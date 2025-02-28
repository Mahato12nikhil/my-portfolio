import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../common/interfaces";

const initialState: IUser={
    id: -1,
    name:"",
    email:"",
    phone:"",
    username:"",
}
// const Login=createAsyncThunk('/user/login',()=>{

// })
const UserSlice=createSlice({
    name:"userSlice",
    initialState:initialState,
    reducers:{

    }
})
export default UserSlice