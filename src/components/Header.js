import { lazy, useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";

const Header = () => {
    const [buttonName, setButtonName] = useState("Login");
    const data = useContext(UserContext);
    const handleLoginButton = () => {
        setButtonName(buttonName === 'Login' ? 'Logout' : 'Login')
        
    };
    
    
    return (
        <div className="header">
            <div className="logoContainer">
                <img className='logo' src={LOGO} alt="logo" />
            </div>
            <div className='navItems'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><button onClick={handleLoginButton}> {buttonName}</button> </li>
                    <li>{data.loggedInUser}</li>
                </ul>

            </div>
        </div>
    )
}

export default Header;