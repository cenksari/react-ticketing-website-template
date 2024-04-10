import Link from 'next/link';

import Badge from '@components/Badge/Badge';
import ButtonLink from '@components/Button/ButtonLink';

type Props = {
  url: string;
  from: string;
  when: string;
  name: string;
  venue: string;
  image: string;
  color: string;
};

const EventCard = ({ url, from, when, name, venue, image, color }: Props) => (
  <div className='card'>
    <Link href={`/event/${url}`}>
      <div className='card-title'>
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
        <span>
          <i className='material-symbols-outlined'>event</i> {when}
        </span>
        <span>
          <i className='material-symbols-outlined'>apartment</i> {venue}
        </span>
        <span>
          <i className='material-symbols-outlined'>local_activity</i> from <strong>£{from}</strong>
        </span>
      </div>
    </Link>
    <div className='card-buttons'>
      <ButtonLink
        color={`${color}-filled`}
        text='Details'
        rightIcon='arrow_forward'
        url={`event/${url}`}
      />
    </div>
  </div>
);

export default EventCard;
