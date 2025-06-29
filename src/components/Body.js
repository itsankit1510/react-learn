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
            <div className="flex justify-center items-center min-h-[60vh]">
                <Shimmer />
            </div>
        );
    }

    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <section className="flex flex-wrap gap-4 items-center justify-between mb-8 bg-white p-4 rounded-lg shadow">
                <button
                    className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                    title="Filter expensive products"
                    onClick={handleFilterButton}
                >
                    💸 Price Above 1000
                </button>
                <input
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 w-48"
                    type="text"
                    placeholder="🔍 Search products"
                    value={search}
                    onChange={handleSearch}
                />
                <input
                    className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 w-48"
                    type="text"
                    placeholder="Your name"
                    value={loggedInUser}
                    onChange={e => setUserName(e.target.value)}
                />
                <span className="text-gray-600 font-medium">Total: {restaurantList.length}</span>
            </section>

            <section className="flex flex-wrap gap-6 justify-center">
                {noData ? (
                    <h2 className="text-2xl text-red-500 font-semibold">No Data Found</h2>
                ) : (
                    restaurantList.map(product => (
                        <div key={product.id} className="relative group flex flex-col items-center">
                            <Link to={`/restaurant/${product.id}`} className="block w-full">
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
                            <button
                                className="mt-3 w-11/12 px-4 py-2 bg-indigo-500 text-white rounded-lg font-semibold shadow hover:bg-indigo-600 transition"
                                onClick={() => console.log({ id: product.id, title: product.title, price: product.price, img: product.thumbnail })}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </section>
        </main>
    );
};

export default Body;