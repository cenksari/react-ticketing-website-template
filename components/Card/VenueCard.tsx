import Link from 'next/link';

import Badge from '@components/Badge/Badge';
import ButtonLink from '@components/Button/ButtonLink';

type Props = {
  url: string;
  name: string;
  image: string;
  color: string;
  location: string;
};

const VenueCard = ({ url, name, image, color, location }: Props) => (
  <div className='card'>
    <Link href={`/venue/${url}`}>
      <div className='card-title venue'>
        <span>{name}</span>
      </div>
      <div
        className='card-image'
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        <Badge color='gray' text='NEW' />
      </div>
      <div className='card-info'>
        <p>
          <span className='material-symbols-outlined'>location_on</span> {location}
        </p>
      </div>
    </Link>
    <div className='card-buttons'>
      <ButtonLink
        color={`${color}-filled`}
        text='Details'
        rightIcon='arrow_forward'
        url={`venue/${url}`}
      />
    </div>
  </div>
);

export default VenueCard;
