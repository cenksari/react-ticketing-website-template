import Link from 'next/link';

type Props = {
  url: string;
  text: string;
  active?: boolean;
  disabled?: boolean;
};

const ButtonGroupItem = ({ url, text, active, disabled }: Props) => {
  let className = '';

  if (disabled) {
    className = 'disabled';
  } else if (active) {
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
