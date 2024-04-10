import Link from 'next/link';

type Props = {
  icon: string;
  text: string;
};

const ButtonCircle = ({ icon, text }: Props) => (
  <Link className='circle-button' href='/'>
    <div className='circle'>
      <i className='material-symbols-outlined right-icon'>{icon}</i>
    </div>
    <span>{text}</span>
  </Link>
);

export default ButtonCircle;
