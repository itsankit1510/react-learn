import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
    const { resId } = useParams(); // Extract resId from the URL
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        const fetchItemData = async () => {
            let res = await fetch(`https://dummyjson.com/products/${resId}`);
            res = await res.json();
            setItemData(res);
        };
        fetchItemData();
    }, []);

    if (!itemData) {
        return <div className="flex justify-center items-center min-h-[60vh] text-xl text-gray-500">Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8">
            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={itemData.thumbnail}
                    alt={itemData.title}
                    className="w-44 h-44 object-cover rounded-xl shadow"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{itemData.title}</h1>
                    <p className="text-gray-500 mb-1">{itemData.brand} &middot; {itemData.category}</p>
                    <p className="font-semibold text-lg mb-1">
                        ${itemData.price}{" "}
                        <span className="text-green-600 text-base font-medium">
                            ({itemData.discountPercentage}% off)
                        </span>
                    </p>
                    <p className="mb-1">
                        <span className="text-yellow-500 font-semibold">★ {itemData.rating}</span>
                        {" "}({itemData.reviews?.length || 0} reviews)
                    </p>
                    <p className="mb-1 text-green-600">{itemData.availabilityStatus}</p>
                    <p className="mb-1 text-gray-500">Min. Order: {itemData.minimumOrderQuantity}</p>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{itemData.description}</p>
            </div>
            <div className="mt-6">
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex gap-2 flex-wrap">
                    {itemData.tags?.map(tag => (
                        <span key={tag} className="bg-gray-100 rounded px-3 py-1 text-sm">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="mt-6">
                <h3 className="font-semibold mb-2">Reviews</h3>
                {itemData.reviews && itemData.reviews.length > 0 ? (
                    <ul className="space-y-3">
                        {itemData.reviews.map((review, idx) => (
                            <li key={idx} className="bg-gray-50 rounded p-3">
                                <strong>{review.reviewerName}</strong> &middot; <span className="text-yellow-500">★ {review.rating}</span>
                                <p className="my-1">{review.comment}</p>
                                <small className="text-gray-400">{new Date(review.date).toLocaleDateString()}</small>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-400">No reviews yet.</p>
                )}
            </div>
            <div className="mt-6 text-gray-500">
                <p><strong>Warranty:</strong> {itemData.warrantyInformation}</p>
                <p><strong>Shipping:</strong> {itemData.shippingInformation}</p>
                <p><strong>Return Policy:</strong> {itemData.returnPolicy}</p>
            </div>
        </div>
    );
};

export default Menu;