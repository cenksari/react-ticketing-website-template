import React from 'react';

import Link from 'next/link';

// interfaces
interface IProps {
  url: string;
  icon: string;
  text: string;
}

const ButtonCircle = ({ url, icon, text }: IProps): React.JSX.Element => (
  <Link className='circle-button' href={`/${url}`}>
    <div className='circle'>
      <span className='material-symbols-outlined right-icon'>{icon}</span>
    </div>
    <div className='text'>{text}</div>
  </Link>
);

export default ButtonCircle;
