import React from 'react';

interface Props {
  color: string;
  children: React.ReactNode;
}

const Dropdown = ({ color, children }: Props): React.JSX.Element => (
  <div className={`dropdown ${color}`}>{children}</div>
);

export default Dropdown;
