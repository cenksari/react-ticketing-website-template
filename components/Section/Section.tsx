import React from 'react';

interface Props {
  className?: string | null;
  children: React.ReactNode;
}

const Section = ({ className, children }: Props): React.JSX.Element => (
  <section className={className !== undefined ? `${className}` : 'no-style'}>{children}</section>
);

export default Section;
