import React from 'react';
import { Btn } from './styles';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
    <Btn
      onClick={() => {
        onClick && onClick();
      }}
      disabled={disabled}
      type={type}
    >
      {label}
    </Btn>
    // <button
    //   disabled={disabled}
    //   className={`w-auto h-10 ${
    //     disabled ? 'bg-gray-600' : 'bg-iris-100'
    //   } text-white py-2 px-4 rounded`}
    //   type={type}
    //   onClick={() => {
    //     onClick && onClick();
    //   }}
    // >
    //   {label}
    // </button>
  );
};

export default Button;
