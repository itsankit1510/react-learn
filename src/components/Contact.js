import React from "react";

const Contact = () => {
    return (
        <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Contact Us</h2>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[100px]"
                    required
                />
                <button type="submit" className="bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition font-semibold">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;