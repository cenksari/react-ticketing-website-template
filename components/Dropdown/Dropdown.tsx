// interfaces
interface IProps {
  color: string;
  children: React.ReactNode;
}

const Dropdown = ({ color, children }: IProps): JSX.Element => (
  <div className={`dropdown ${color}`}>{children}</div>
);

export default Dropdown;
