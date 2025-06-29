import React from "react";

const User = ({ name, age, city }) => {
    return (
        <div className="max-w-xs mx-auto my-6 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-50 to-indigo-100 text-center">
            <div className="text-2xl font-bold text-indigo-700 mb-2">{name}</div>
            <div className="text-lg text-gray-700 mb-1">Age: {age}</div>
            <div className="text-lg text-gray-700">City: {city}</div>
        </div>
    );
};

export default User;