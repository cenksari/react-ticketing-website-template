// interfaces
interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({ className, children }) => (
  <section className={className !== undefined ? `${className}` : 'no-style'}>{children}</section>
);

export default Section;
