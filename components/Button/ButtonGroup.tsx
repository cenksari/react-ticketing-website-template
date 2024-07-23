import React from 'react';

// interfaces
interface IProps {
  color: string;
  children: React.ReactNode;
}

const ButtonGroup = ({ color, children }: IProps): React.JSX.Element => (
  <div className={`button-group ${color}`}>{children}</div>
);

export default ButtonGroup;
