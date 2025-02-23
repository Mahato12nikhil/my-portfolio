import { useNavigate } from "react-router-dom"

const useAppNavigation=()=>{
    const navigate=useNavigate();
    return {
        goToHome: ()=>navigate('/'),
        goToAbout: ()=>navigate('/about'),
        goToExperience: ()=>navigate('/experience')
    }
}
export default useAppNavigation;