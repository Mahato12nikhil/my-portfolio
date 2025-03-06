import { useAppSelector } from "@/state/store";
import { useEffect, useState } from "react";

const useAuth = (): boolean => {
    const token = useAppSelector(state => state.token?.token);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        try {
           
            const base64Url = token.split(".")[1]; 
            if (!base64Url) throw new Error("Invalid token format");

            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const decodedPayload = JSON.parse(atob(base64)); 

            const isTokenValid = decodedPayload.exp * 1000 > Date.now();
            setIsAuthenticated(isTokenValid);
        } catch {
            setIsAuthenticated(false);
        }
    }, [token]);

    return  isAuthenticated; 
};

export default useAuth;
