import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import Admin from "../pages/admin/Admin";
import AuthGuard from "../components/AuthGuard";

type RoutePath="/" | "/home" | "/projects" | "/admin" | "/journey" | "/about" | "/contact" | '/portfolio';

interface RouteConfig<T extends string=RoutePath>{
    path:T,
    element:React.ReactNode
}
const routes:RouteConfig<RoutePath>[]=[
    {path: "/portfolio", element: <Home /> },
    {path: "/", element: <Home /> },
    {path: "/home", element: <Home /> },
    {path: "/journey", element: <Home /> },
    {path: "/about", element: <Home /> },
    {path: "/projects", element: <Home /> },
    {path: "/contact", element: <Home />},
    {path: "/admin", element: <AuthGuard><Admin /></AuthGuard> },
]
const AppRoutes:React.FC=()=>{
    return(
        <BrowserRouter>
            <Routes>
                {routes.map(({path,element})=>(
                    <Route key={path} path={path} element={element}/>
                ))}
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;