import Link from 'next/link';

type Props = {
  url: string;
  text: string;
  color: string;
  leftIcon?: string;
  rightIcon?: string;
};

const ButtonLink = ({ url, text, color, leftIcon, rightIcon }: Props) => (
  <Link className={`button ${color}`} href={`/${url}`}>
    {leftIcon && <span className='material-symbols-outlined left-icon'>{leftIcon}</span>}
    {text}
    {rightIcon && <span className='material-symbols-outlined right-icon'>{rightIcon}</span>}
  </Link>
);

export default ButtonLink;
