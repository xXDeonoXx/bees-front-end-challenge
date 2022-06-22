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
  );
};

export default Button;
