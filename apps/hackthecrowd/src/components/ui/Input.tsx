import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
  <input
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 ${className}`}
    {...props}
  />
);