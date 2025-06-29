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
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <img className='w-32 h-auto object-contain' src={LOGO} alt="logo" />
                <span className="text-xl font-bold text-indigo-600">Foodie</span>
            </div>
            <nav>
                <ul className="flex gap-6 items-center text-lg font-medium text-gray-700">
                    <li><Link className="hover:text-indigo-600 transition" to="/">Home</Link></li>
                    <li><Link className="hover:text-indigo-600 transition" to="/about">About</Link></li>
                    <li><Link className="hover:text-indigo-600 transition" to="/contact">Contact</Link></li>
                    <li><Link className="hover:text-indigo-600 transition" to="/cart">Cart</Link></li>
                    <li>
                        <button onClick={handleLoginButton} className="px-4 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition">{buttonName}</button>
                    </li>
                    <li className="ml-2 text-indigo-700 font-semibold">{data.loggedInUser}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;