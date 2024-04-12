import React from 'react';

interface IProps {
  text: string;
  color: string;
}

const Badge = ({ text, color }: IProps): React.JSX.Element => (
  <span className={`badge ${color}`}>{text}</span>
);

export default Badge;
