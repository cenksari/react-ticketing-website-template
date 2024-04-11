import Link from 'next/link';

type Props = {
  url: string;
  icon: string;
  text: string;
};

const ButtonCircle = ({ url, icon, text }: Props) => (
  <Link className='circle-button' href={`/${url}`}>
    <div className='circle'>
      <span className='material-symbols-outlined right-icon'>{icon}</span>
    </div>
    <div className='text'>{text}</div>
  </Link>
);

export default ButtonCircle;
