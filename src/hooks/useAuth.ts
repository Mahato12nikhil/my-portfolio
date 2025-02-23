import { useState } from "react"

const useAuth=():boolean=>{
    let [isAuthenticated]=useState<boolean>(false);

    return isAuthenticated;
}
export default useAuth