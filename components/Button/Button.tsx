import React from 'react';

interface Props {
  type?: string | 'button';
  text: string;
  color: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
}

const Button = ({ type, text, color, leftIcon, rightIcon }: Props): React.JSX.Element => (
  <button type={type === 'button' ? 'button' : 'submit'} className={color}>
    {leftIcon !== null && <span className='material-symbols-outlined left-icon'>{leftIcon}</span>}
    {text}
    {rightIcon !== null && (
      <span className='material-symbols-outlined right-icon'>{rightIcon}</span>
    )}
  </button>
);

export default Button;
