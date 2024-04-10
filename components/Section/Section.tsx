import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Section = ({ className, children }: Props) => (
  <section className={className ? `${className}` : 'no-style'}>{children}</section>
);

export default Section;
