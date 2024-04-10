import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Box = ({ className, children }: Props) => (
  <div className={className ? `box ${className}` : 'box'}>
    <div className='box-inner'>{children}</div>
  </div>
);

export default Box;
