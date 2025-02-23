import { IconType } from "react-icons";
import { CiHome, CiUser, CiRoute } from "react-icons/ci";
import { LuLayers } from "react-icons/lu";
import { GiAchievement } from "react-icons/gi";
import './css/NavigationBar.css'
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavProps{
    activeSection:string
}
const NavigationBar = ({activeSection}:NavProps) => {
    const navigate=useNavigate();
    const location=useLocation();

    type NavItem = {
        name: string;
        icon: IconType;
        path: string;
    };

    const icons: NavItem[] = [
        { name: "Home", icon: CiHome, path: "/home" },
        { name: "About", icon: CiUser, path: "/about" },
        { name: "Journey", icon: CiRoute, path: "/journey" },
        { name: "Projects", icon: LuLayers, path: "/projects" },
        { name: "Contact", icon: GiAchievement, path: "/contact" },
    ];


    function onSectionSelect(path:string,sectionId:string) {
       navigate(path);
       const section = document.getElementById(sectionId);
       console.log("section "+section)
       if (section) {
           section.scrollIntoView({ behavior: "smooth" });
       }
    }

     useEffect(() => {
        const path = location.pathname.replace("/", "");
        const section = document.getElementById(path);
        console.log()
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.pathname]);
   
    return (
        <ul className="navigation">
            {icons.map((val, key) => (
               <li key={key} onClick={()=>onSectionSelect(val.path, val.name.toLowerCase())} style={{ cursor: "pointer" }} className={activeSection===val.name.toLowerCase()?'active':''}>
                    <val.icon size="3rem" className="nav_icon "/>
                    <span>{val.name}</span>
                </li>
            ))}
        </ul>
    );
};

export default NavigationBar;
