// interfaces
interface IProps {
  text: string;
  color: string;
}

const Badge: React.FC<IProps> = ({ text, color }) => (
  <span className={`badge ${color}`}>{text}</span>
);

export default Badge;
