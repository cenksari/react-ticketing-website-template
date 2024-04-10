import React from 'react';

type Props = {
  color: string;
  children: React.ReactNode;
};

const Dropdown = ({ color, children }: Props) => (
  <div className={`dropdown ${color}`}>{children}</div>
);

export default Dropdown;
