// import React from 'react';
// import User from './User';
// import UserClass from './UserClass';

import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="max-w-xl mx-auto mt-12 p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 mb-8">
                Welcome to our website! We are passionate about building amazing web applications using <span className="text-indigo-500 font-semibold">React</span>.
            </p>
            <User name={"Ankitsingh"} age={123} city={"Pune"} />
            <UserClass name={"Ankitsingh"} age={123} city={"Pune"} />
        </div>
    );
};

export default About;