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
    {leftIcon && <i className='material-symbols-outlined left-icon'>{leftIcon}</i>}
    {text}
    {rightIcon && <i className='material-symbols-outlined right-icon'>{rightIcon}</i>}
  </Link>
);

export default ButtonLink;
