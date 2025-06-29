import React from 'react';
import { useRouteError } from 'react-router-dom';
const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 text-slate-800">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#f87171" opacity="0.2" />
                <path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h1 className="text-5xl font-bold mt-4 mb-2">404</h1>
            <h2 className="text-2xl font-medium mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-6">
                Sorry, the page you are looking for does not exist.
            </p>
            <a
                href="/"
                className="px-6 py-2 bg-indigo-500 text-white rounded-lg font-semibold shadow hover:bg-indigo-600 transition"
            >
                Go Home
            </a>
        </div>
    );
};

export default Error;