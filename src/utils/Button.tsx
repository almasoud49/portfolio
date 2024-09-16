import React from 'react';

interface ButtonProps {
  title: string;
  type?: 'button' | 'submit' | 'reset'; 
  ariaLabel?: string; 
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button>{title}</button>;
};

export default Button;