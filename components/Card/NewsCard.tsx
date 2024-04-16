import React from 'react';

import Link from 'next/link';

import Badge from '@components/Badge/Badge';
import ButtonLink from '@components/Button/ButtonLink';

interface IProps {
  url: string;
  name: string;
  when: string;
  image: string;
  color: string;
}

const NewsCard = ({ url, name, when, image, color }: IProps): React.JSX.Element => (
  <div className='card'>
    <Link href={`/news/${url}`}>
      <div
        className='card-image'
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <Badge color={color} text='NEW' />
      </div>
      <div className='card-info'>
        <p>
          <strong>{name}</strong>
        </p>
        <p className='small'>{when}</p>
      </div>
    </Link>
    <div className='card-buttons'>
      <ButtonLink
        color={`${color}-overlay`}
        text='Details'
        rightIcon='arrow_forward'
        url={`news/${url}`}
      />
    </div>
  </div>
);

export default NewsCard;
