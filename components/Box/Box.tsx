// interfaces
interface IProps {
  className?: string;
  children: React.ReactNode;
}

const Box: React.FC<IProps> = ({ className, children }) => (
  <div className={className !== undefined ? `box ${className}` : 'box'}>
    <div className='box-inner'>{children}</div>
  </div>
);

export default Box;
