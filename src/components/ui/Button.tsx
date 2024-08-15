import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  color,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block rounded-md px-4 py-2 font-poppins text-[15px] font-medium text-primary-100 ${className}`}
      color={color}
    >
      {children}
    </button>
  );
};
