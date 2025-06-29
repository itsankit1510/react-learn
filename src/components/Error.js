import React from 'react';
import { useRouteError } from 'react-router-dom';
const Error = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            color: '#1e293b',
            fontFamily: 'Segoe UI, sans-serif'
        }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#f87171" opacity="0.2" />
                <path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h1 style={{ fontSize: '3rem', margin: '1rem 0 0.5rem' }}>404</h1>
            <h2 style={{ fontWeight: 400, marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                Sorry, the page you are looking for does not exist.
            </p>
            <a
                href="/"
                style={{
                    padding: '0.75rem 2rem',
                    background: '#6366f1',
                    color: '#fff',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontWeight: 500,
                    boxShadow: '0 2px 8px rgba(99,102,241,0.15)'
                }}
            >
                Go Home
            </a>
        </div>
    );
};

export default Error;