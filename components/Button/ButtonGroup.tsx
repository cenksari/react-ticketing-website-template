import React from 'react';

interface Props {
  color: string;
  children: React.ReactNode;
}

const ButtonGroup = ({ color, children }: Props): React.JSX.Element => (
  <div className={`button-group ${color}`}>{children}</div>
);

export default ButtonGroup;
