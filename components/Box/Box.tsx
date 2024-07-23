import React from 'react';

// interfaces
interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Box = ({ className, children }: IProps): React.JSX.Element => (
  <div className={className !== undefined ? `box ${className}` : 'box'}>
    <div className='box-inner'>{children}</div>
  </div>
);

export default Box;
