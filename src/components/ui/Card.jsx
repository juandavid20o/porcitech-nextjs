import React from 'react';

export default function Card({ children, className = '', ...props }) {
    return (
        <div 
            className={`bg-white text-slate-900 border border-slate-100 rounded-3xl shadow-sm p-6 ${className}`} 
            {...props}
        >
            {children}
        </div>
    );
}