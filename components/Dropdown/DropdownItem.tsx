import Link from 'next/link';

type Props = {
  url: string;
  text: string;
  active?: boolean;
};

const DropdownItem = ({ url, text, active }: Props) => (
  <Link className={active ? 'button active' : 'button passive'} href={`/${url}`}>
    {text}
  </Link>
);

export default DropdownItem;
