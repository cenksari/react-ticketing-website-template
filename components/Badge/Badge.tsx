type Props = {
  text: string;
  color: string;
};

const Badge = ({ text, color }: Props) => <span className={`badge ${color}`}>{text}</span>;

export default Badge;
