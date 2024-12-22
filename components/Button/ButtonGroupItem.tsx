import Link from 'next/link';

// interfaces
interface IProps {
  url: string;
  text: string;
  active?: boolean;
  disabled?: boolean;
}

const ButtonGroupItem: React.FC<IProps> = ({ url, text, active, disabled }) => {
  let className = '';

  if (disabled === true) {
    className = 'disabled';
  } else if (active === true) {
    className = 'active';
  } else {
    className = 'passive';
  }

  return (
    <Link className={`button ${className}`} href={`/${url}`}>
      {text}
    </Link>
  );
};

export default ButtonGroupItem;
