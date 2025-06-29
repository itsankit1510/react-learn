import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromototedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [search, setSearch] = useState("");
    const [noData, setNoData] = useState(false);
    const RestaurantCardPromoted = withPromototedLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);
const {loggedInUser, setUserName} = useContext(UserContext);
    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=75&skip=10');
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data.products)
            setRestaurantList(data.products);
            setAllRestaurants(data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleFilterButton = () => {
        const filtered = allRestaurants.filter(product => product.price > 1000);

        setRestaurantList(filtered);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
        const filtered = allRestaurants.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase()));
        if (filtered.length === 0) setNoData(true);
        else {
            setNoData(false)
            setRestaurantList(filtered)
        };
    };

    if (restaurantList.length === 0 && !noData) {
        return (
            <div className="loading">
                <Shimmer />
            </div>
        );
    } else {
        return (
            <div className="body">
                <div className="filter">
                    <button className="filterButton" title="Filter expensive products" onClick={handleFilterButton}>Price Above 1000</button>
                </div>
                <div className="buttonContainer">
                    <div className="searchContainer">
                        <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
                    </div>
                    <div className="searchContainer">
                        <input type="text" placeholder="Type here" value={loggedInUser} onChange={(e)=>{
                            setUserName(e.target.value);                          
                        }} />
                    </div>
                    <div className="countContainer">Total : {restaurantList.length}</div>
                </div>

                <div className="restaurantContainer">
                    {noData ? (
                        <h1 className="noData">No Data Found</h1>
                    ) : (
                        restaurantList.map((product) => (

                            <div key={product.id} style={{ cursor: "pointer" }}>
                                <Link to={"/restaurant/" + product.id}>
                                    {product.id % 2 === 0 ? (
                                        <RestaurantCard
                                            title={product.title}
                                            price={product.price}
                                            img={product.thumbnail}
                                        />
                                    ) : (
                                        <RestaurantCardPromoted
                                            title={product.title}
                                            price={product.price}
                                            img={product.thumbnail}
                                        />
                                    )}
                                </Link>
                            </div>


                        ))
                    )}

                </div>
            </div >
        );
    }
};

export default Body;