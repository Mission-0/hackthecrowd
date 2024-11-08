import React from 'react';

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ className = '', ...props }) => (
  <label className={`block text-sm font-medium ${className}`} {...props} />
);