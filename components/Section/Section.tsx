import React from 'react';

// interfaces
interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Section = ({ className, children }: IProps): React.JSX.Element => (
  <section className={className !== undefined ? `${className}` : 'no-style'}>{children}</section>
);

export default Section;
