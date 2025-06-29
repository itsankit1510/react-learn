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
        return <div className="menu">Loading...</div>;
    }

    return (
        <div className="menu" style={{
            maxWidth: 600,
            margin: "2rem auto",
            padding: "2rem",
            borderRadius: "16px",
            background: "#fff",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)"
        }}>
            <div style={{ display: "flex", gap: "2rem" }}>
                <img
                    src={itemData.thumbnail}
                    alt={itemData.title}
                    style={{
                        width: 180,
                        height: 180,
                        objectFit: "cover",
                        borderRadius: "12px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                    }}
                />
                <div>
                    <h1 style={{ margin: 0, fontSize: "2rem" }}>{itemData.title}</h1>
                    <p style={{ color: "#888", margin: "0.5rem 0" }}>{itemData.brand} &middot; {itemData.category}</p>
                    <p style={{ fontWeight: 500, fontSize: "1.2rem", margin: "0.5rem 0" }}>
                        ${itemData.price}{" "}
                        <span style={{ color: "#2ecc40", fontSize: "1rem" }}>
                            ({itemData.discountPercentage}% off)
                        </span>
                    </p>
                    <p style={{ margin: "0.5rem 0" }}>
                        <span style={{ color: "#f39c12", fontWeight: 600 }}>★ {itemData.rating}</span>
                        {" "}({itemData.reviews?.length || 0} reviews)
                    </p>
                    <p style={{ margin: "0.5rem 0", color: "#27ae60" }}>
                        {itemData.availabilityStatus}
                    </p>
                    <p style={{ margin: "0.5rem 0", color: "#888" }}>
                        Min. Order: {itemData.minimumOrderQuantity}
                    </p>
                </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
                <h2>Description</h2>
                <p>{itemData.description}</p>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
                <h3>Tags</h3>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {itemData.tags?.map(tag => (
                        <span key={tag} style={{
                            background: "#f1f1f1",
                            borderRadius: "8px",
                            padding: "0.3rem 0.8rem",
                            fontSize: "0.9rem"
                        }}>{tag}</span>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
                <h3>Reviews</h3>
                {itemData.reviews && itemData.reviews.length > 0 ? (
                    <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                        {itemData.reviews.map((review, idx) => (
                            <li key={idx} style={{
                                background: "#fafafa",
                                borderRadius: "8px",
                                marginBottom: "0.7rem",
                                padding: "0.7rem 1rem"
                            }}>
                                <strong>{review.reviewerName}</strong> &middot; <span style={{ color: "#f39c12" }}>★ {review.rating}</span>
                                <p style={{ margin: "0.3rem 0" }}>{review.comment}</p>
                                <small style={{ color: "#aaa" }}>{new Date(review.date).toLocaleDateString()}</small>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews yet.</p>
                )}
            </div>
            <div style={{ marginTop: "1.5rem", color: "#888" }}>
                <p><strong>Warranty:</strong> {itemData.warrantyInformation}</p>
                <p><strong>Shipping:</strong> {itemData.shippingInformation}</p>
                <p><strong>Return Policy:</strong> {itemData.returnPolicy}</p>
            </div>
        </div>
    );
};

export default Menu;