import { memo } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';
import ButtonLink from '../Button/ButtonLink';

const EventCard = memo(({ name, location, image, color }) => (
  <div className='card'>
    <Link to='/venue'>
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
        <span>
          <i className='material-icons'>location_on</i> {location}
        </span>
      </div>
    </Link>
    <div className='card-buttons'>
      <ButtonLink
        type='button'
        color={`${color}-filled`}
        text='Details'
        rightIcon='arrow_forward'
        onClick='/venue'
      />
    </div>
  </div>
));

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default EventCard;
