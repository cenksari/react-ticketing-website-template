// interfaces
interface IProps {
  color: string;
  children: React.ReactNode;
}

const ButtonGroup: React.FC<IProps> = ({ color, children }) => (
  <div className={`button-group ${color}`}>{children}</div>
);

export default ButtonGroup;
