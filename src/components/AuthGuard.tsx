import { JSX, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useAppDispatch } from "@/state/store";
import { login } from "@/state/reducers/Token";

interface AuthGuardProps{
    children:JSX.Element;
}
const LoginCom=()=>{
    const [username, setUsername]=useState<string>("");
    const [password, setPassword]=useState<string>("");

    const dispatch=useAppDispatch();

    function handleLogin(): void {
        dispatch(login({username, password}));
    }

    return (
        <>
                <div >
                    <div >
                        <h2>Login</h2>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button onClick={handleLogin}>Submit</button>
                    </div>
                </div>
        </>
    )
}
const AuthGuard:React.FC<AuthGuardProps>=({children})=>{
    const isAuthenticated=useAuth();

    return isAuthenticated?children:<LoginCom/>; 
}
export default AuthGuard;