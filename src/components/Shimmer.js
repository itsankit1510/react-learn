const shimmer = () => {
    // Render 8 shimmer cards to mimic loading state
    return (
        <div className="shimmerContainer">
            {Array(8).fill(0).map((_, idx) => (
                <div className="shimmerCard" key={idx}>
                    <div className="shimmerImage shimmer-animate"></div>
                    <div className="shimmerTitle shimmer-animate"></div>
                    <div className="shimmerPrice shimmer-animate"></div>
                </div>
            ))}
        </div>
    );
}

export default shimmer;