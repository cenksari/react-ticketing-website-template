import React from 'react';

import Link from 'next/link';

interface IProps {
  url: string;
  text: string;
  color: string;
  leftIcon?: string;
  rightIcon?: string;
}

const ButtonLink = ({ url, text, color, leftIcon, rightIcon }: IProps): React.JSX.Element => (
  <Link className={`button ${color}`} href={`/${url}`}>
    {leftIcon !== undefined && (
      <span className='material-symbols-outlined left-icon'>{leftIcon}</span>
    )}
    {text}
    {rightIcon !== undefined && (
      <span className='material-symbols-outlined right-icon'>{rightIcon}</span>
    )}
  </Link>
);

export default ButtonLink;
