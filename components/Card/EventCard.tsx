import Link from 'next/link';

// components
import Badge from '@components/Badge/Badge';
import ButtonLink from '@components/Button/ButtonLink';

// interfaces
interface IProps {
  url: string;
  from: string;
  when: string;
  name: string;
  venue: string;
  image: string;
  color: string;
}

const EventCard: React.FC<IProps> = ({ url, from, when, name, venue, image, color }) => (
  <div className='card'>
    <Link href={`/event/${url}`}>
      <div className='card-title'>
        <h3>{name}</h3>
      </div>
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
          <span className='material-symbols-outlined'>event</span> {when}
        </p>
        <p>
          <span className='material-symbols-outlined'>apartment</span> {venue}
        </p>
        <p>
          <span className='material-symbols-outlined'>local_activity</span> from{' '}
          <strong>£{from}</strong>
        </p>
      </div>
    </Link>
    <div className='card-buttons'>
      <ButtonLink
        color={`${color}-overlay`}
        text='Details'
        rightIcon='arrow_forward'
        url={`event/${url}`}
      />
    </div>
  </div>
);

export default EventCard;
