import React from 'react';

interface Props {
  text: string;
  color: string;
}

const Badge = ({ text, color }: Props): React.JSX.Element => (
  <span className={`badge ${color}`}>{text}</span>
);

export default Badge;
