import Link from 'next/link';

// interfaces
interface IProps {
  url: string;
  text: string;
  active?: boolean;
}

const DropdownItem = ({ url, text, active }: IProps): JSX.Element => (
  <Link className={active === true ? 'button active' : 'button passive'} href={`/${url}`}>
    {text}
  </Link>
);

export default DropdownItem;
