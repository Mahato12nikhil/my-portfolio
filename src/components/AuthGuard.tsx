import { JSX } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

interface AuthGuardProps{
    children:JSX.Element;
}
const AuthGuard:React.FC<AuthGuardProps>=({children}):JSX.Element=>{
    const isAuthenticated=useAuth()

    return isAuthenticated?children:<Navigate to="/" replace/>;
}
export default AuthGuard;