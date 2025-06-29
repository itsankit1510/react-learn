import { useContext } from "react";
import { REST_IMG } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = ({ title, price, img }) => {
    const userData = useContext(UserContext);
    const styleCard = {
        width: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backgroundColor: "#fff",
        margin: "10px",
        padding: "15px",
        transition: "transform 0.2s, box-shadow 0.2s",
    };

    const styleImage = {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px 10px 0 0",
    };

    const styleHeading = {
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: "10px 0",
        color: "#333",
    };

    const styleText = {
        fontSize: "0.9rem",
        color: "#555",
        margin: "5px 0",
    };

    return (
        <div
            className="restaurantCard"
            style={styleCard}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
        >
            <img
                className="restaurant-image"
                src={img}
                alt="Product"
                style={styleImage}
            />
            <h2 style={styleHeading}>{title}</h2>
            <p style={styleText}>Price: ₹{price}</p>
            <p>Name: {userData.loggedInUser}</p>
        </div>
    );
};

export const withPromototedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;