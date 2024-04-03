import { memo } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';
import ButtonLink from '../Button/ButtonLink';

const EventCard = memo(({ from, when, name, venue, image, color }) => (
  <div className='card'>
    <Link to='/event'>
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
        type='button'
        color={`${color}-filled`}
        text='Details'
        rightIcon='arrow_forward'
        onClick='/event'
      />
    </div>
  </div>
));

EventCard.propTypes = {
  from: PropTypes.string.isRequired,
  when: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default EventCard;
