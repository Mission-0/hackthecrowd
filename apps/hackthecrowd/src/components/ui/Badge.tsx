import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ className = '', variant = 'default', ...props }) => {
  const variantStyles = {
    default: 'bg-cyan-100 text-cyan-800',
    secondary: 'bg-gray-100 text-gray-800',
    outline: 'border border-cyan-500 text-cyan-500',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
};