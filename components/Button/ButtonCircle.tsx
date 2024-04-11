import Link from 'next/link';

type Props = {
  url: string;
  icon: string;
  text: string;
};

const ButtonCircle = ({ url, icon, text }: Props) => (
  <Link className='circle-button' href={`/${url}`}>
    <div className='circle'>
      <i className='material-symbols-outlined right-icon'>{icon}</i>
    </div>
    <span>{text}</span>
  </Link>
);

export default ButtonCircle;
