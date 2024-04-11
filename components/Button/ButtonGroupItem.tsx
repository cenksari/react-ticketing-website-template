import React from 'react';

import Link from 'next/link';

interface Props {
  url: string;
  text: string;
  active?: boolean | false;
  disabled?: boolean | false;
}

const ButtonGroupItem = ({ url, text, active, disabled }: Props): React.JSX.Element => {
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
