import React from 'react';

type Props = {
  color: string;
  children: React.ReactNode;
};

const ButtonGroup = ({ color, children }: Props) => (
  <div className={`button-group ${color}`}>{children}</div>
);

export default ButtonGroup;
