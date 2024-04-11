import React from 'react';

interface Props {
  className?: string | null;
  children: React.ReactNode;
}

const Section = ({ className, children }: Props): React.JSX.Element => (
  <section className={className !== null ? `${className}` : 'no-style'}>{children}</section>
);

export default Section;
