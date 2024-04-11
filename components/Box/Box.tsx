import React from 'react';

interface Props {
  className?: string | null;
  children: React.ReactNode;
}

const Box = ({ className, children }: Props): React.JSX.Element => (
  <div className={className !== undefined ? `box ${className}` : 'box'}>
    <div className='box-inner'>{children}</div>
  </div>
);

export default Box;
