import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [buttonName, setButtonName] = useState("Login");

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
                    <li><button onClick={() => setButtonName(buttonName === 'Login' ? 'Logout' : 'Login')}>{buttonName == 'Login' ? 'Login' : 'Logout'}</button> </li>
                </ul>

            </div>
        </div>
    )
}

export default Header;