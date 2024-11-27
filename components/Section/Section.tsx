// interfaces
interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Section = ({ className, children }: IProps): JSX.Element => (
  <section className={className !== undefined ? `${className}` : 'no-style'}>{children}</section>
);

export default Section;
