const shimmer = () => {
    // Render 8 shimmer cards to mimic loading state
    return (
        <div className="flex flex-wrap gap-6 justify-center w-full">
            {Array(8).fill(0).map((_, idx) => (
                <div className="w-64 h-64 bg-gray-100 rounded-xl shadow animate-pulse flex flex-col items-center p-4" key={idx}>
                    <div className="w-full h-40 bg-gray-200 rounded-t-lg mb-3 shimmer-animate"></div>
                    <div className="w-3/4 h-5 bg-gray-200 rounded mb-2 shimmer-animate"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded shimmer-animate"></div>
                </div>
            ))}
        </div>
    );
}

export default shimmer;