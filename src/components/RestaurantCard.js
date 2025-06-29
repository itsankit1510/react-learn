import { useContext } from "react";
import { REST_IMG } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = ({ title, price, img }) => {
    const userData = useContext(UserContext);
    return (
        <div
            className="w-64 bg-white rounded-xl shadow-lg flex flex-col items-center p-4 transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-gray-100"
        >
            <img
                className="w-full h-40 object-cover rounded-t-lg mb-3"
                src={img}
                alt="Product"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-1 text-center line-clamp-2">{title}</h2>
            <p className="text-indigo-600 font-semibold text-base mb-2">Price: ₹{price}</p>
            {/* <p>Name: {userData.loggedInUser}</p> */}
        </div>
    );
};

export const withPromototedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <span className="absolute -top-3 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded shadow">Promoted</span>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;