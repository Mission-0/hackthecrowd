import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'default',
  ...props
}) => {
  const baseStyles = 'font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500';
  const variantStyles = {
    default: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    outline: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white',
    ghost: 'text-cyan-600 hover:bg-cyan-100',
    link: 'text-cyan-600 underline hover:text-cyan-800',
  };
  const sizeStyles = {
    default: 'px-4 py-2',
    sm: 'px-3 py-1 text-sm',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};