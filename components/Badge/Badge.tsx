// interfaces
interface IProps {
  text: string;
  color: string;
}

const Badge = ({ text, color }: IProps): JSX.Element => (
  <span className={`badge ${color}`}>{text}</span>
);

export default Badge;
