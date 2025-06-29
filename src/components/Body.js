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
    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=75&skip=10');
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            setRestaurantList(data.products);
            setAllRestaurants(data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleFilterButton = () => {
        setRestaurantList(allRestaurants.filter(product => product.price > 1000));
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        const filtered = allRestaurants.filter(product =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );
        setNoData(filtered.length === 0);
        setRestaurantList(filtered);
    };

    if (restaurantList.length === 0 && !noData) {
        return (
            <div className="loading sleek-loading">
                <Shimmer />
            </div>
        );
    }

    return (
        <main className="body sleek-body">
            <section className="controls sleek-controls">
                <button
                    className="filterButton sleek-btn"
                    title="Filter expensive products"
                    onClick={handleFilterButton}
                >
                    💸 Price Above 1000
                </button>
                <input
                    className="searchInput sleek-input"
                    type="text"
                    placeholder="🔍 Search products"
                    value={search}
                    onChange={handleSearch}
                />
                <input
                    className="userInput sleek-input"
                    type="text"
                    placeholder="Your name"
                    value={loggedInUser}
                    onChange={e => setUserName(e.target.value)}
                />
                <span className="countContainer sleek-count">
                    Total: {restaurantList.length}
                </span>
            </section>

            <section className="restaurantContainer sleek-cards">
                {noData ? (
                    <h2 className="noData sleek-nodata">No Data Found</h2>
                ) : (
                    restaurantList.map(product => (
                        <div key={product.id} className="cardWrapper sleek-card fade-in">
                            <button
                                className="addToCart sleek-cart-btn"
                                title="Add to cart"
                                onClick={() => console.log("Add to Cart")}
                            >
                                🛒
                            </button>
                            <Link to={`/restaurant/${product.id}`}>
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
            </section>
        </main>
    );
};

export default Body;